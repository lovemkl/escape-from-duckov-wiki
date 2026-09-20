"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { Link } from "@/i18n/navigation";

/**
 * Steam (app 3167020): scavenge across five maps; extract; build hideout;
 * 50+ weapons with mods; blueprints & skill trees. Named map/weapon/hideout
 * catalogs are NOT on the store — slots are player-logged with honest Unknown
 * labels. This is NOT a damage-number cheat sheet.
 */

type MapId =
  | ""
  | "starter"
  | "map-2"
  | "map-3"
  | "map-4"
  | "map-5"
  | "custom";

type FocusId =
  | ""
  | "scavenge"
  | "extract"
  | "quest"
  | "blueprint"
  | "weapon-mod"
  | "skill"
  | "hideout"
  | "workshop";

type HideoutId =
  | ""
  | "base-upgrade"
  | "workbench"
  | "storage"
  | "rest"
  | "unknown-module";

const NOTES_MAX = 160;

const MAP_OPTIONS: { id: MapId; label: string; hint: string }[] = [
  {
    id: "",
    label: "Select map…",
    hint: "Steam: five unique maps — official names Unknown on store",
  },
  {
    id: "starter",
    label: "Starter / early map (slot 1 — Unknown name)",
    hint: "Steam: leave the safety of your base; start as Average Duck",
  },
  {
    id: "map-2",
    label: "Map slot 2 (Unknown name)",
    hint: "Steam: ever-changing loot, enemies, weather — confirm name in-client",
  },
  {
    id: "map-3",
    label: "Map slot 3 (Unknown name)",
    hint: "Official map roster / unlock order: Unknown on Steam store",
  },
  {
    id: "map-4",
    label: "Map slot 4 (Unknown name)",
    hint: "Official map roster / unlock order: Unknown on Steam store",
  },
  {
    id: "map-5",
    label: "Map slot 5 (Unknown name)",
    hint: "Steam: five unique maps — confirm the fifth name in-client",
  },
  {
    id: "custom",
    label: "Custom / your label",
    hint: "Type the in-game map name once you confirm it yourself",
  },
];

const FOCUS_OPTIONS: { id: FocusId; label: string; hint: string }[] = [
  { id: "", label: "Session focus…", hint: "Optional — grounded in Steam about bullets" },
  {
    id: "scavenge",
    label: "Scavenge valuables",
    hint: "Steam: scavenge meds, gear, rare collectibles",
  },
  {
    id: "extract",
    label: "Extract-safe run",
    hint: "Steam: extract in time or you might lose everything",
  },
  {
    id: "quest",
    label: "Quest / NPC clues",
    hint: "Steam: chat with NPCs and complete quests — names Unknown on store",
  },
  {
    id: "blueprint",
    label: "Blueprint hunt",
    hint: "Steam: collect blueprints to craft stronger weapons and gear",
  },
  {
    id: "weapon-mod",
    label: "Weapon mod experiment",
    hint: "Steam: extensive mod system across 50+ weapons — stats Unknown on store",
  },
  {
    id: "skill",
    label: "Skill-tree session",
    hint: "Steam: ranged / melee / attribute skill trees — exact nodes Unknown",
  },
  {
    id: "hideout",
    label: "Hideout / Base night",
    hint: "Steam: build hideout, upgrade Base, workbench scrap → treasure",
  },
  {
    id: "workshop",
    label: "Workshop / mod content note",
    hint: "Steam Workshop listed — do not treat Workshop stats as official store data",
  },
];

const HIDEOUT_OPTIONS: { id: HideoutId; label: string; hint: string }[] = [
  {
    id: "",
    label: "Hideout focus (optional)…",
    hint: "Steam: build hideout / upgrade Base — module names Unknown on store",
  },
  {
    id: "base-upgrade",
    label: "Base upgrade (Unknown module)",
    hint: "Steam: upgrade your Base and grow stronger",
  },
  {
    id: "workbench",
    label: "Workbench / craft night",
    hint: "Steam: with the right touch at your workbench, scrap can become treasure",
  },
  {
    id: "storage",
    label: "Storage / stash prep (Unknown name)",
    hint: "Official stash/module names: Unknown on Steam store",
  },
  {
    id: "rest",
    label: "Rest between raids",
    hint: "Planning slot — confirm rest/recovery systems in-client",
  },
  {
    id: "unknown-module",
    label: "Other module (Unknown)",
    hint: "Log the in-game name in notes once confirmed",
  },
];

const PRESETS: {
  name: string;
  blurb: string;
  map: MapId;
  focus: FocusId;
  hideout?: HideoutId;
  notesHint?: string;
}[] = [
  {
    name: "First raid — basic gun",
    blurb: "Starter map + scavenge focus while you still have one basic gun.",
    map: "starter",
    focus: "scavenge",
    notesHint: "Average Duck start (Steam) — log weapons only after you own them.",
  },
  {
    name: "Extract-safe scav",
    blurb: "Prioritize getting out with loot over greedy fights.",
    map: "starter",
    focus: "extract",
    notesHint: "Extract timer / points: Unknown on store — confirm in-client.",
  },
  {
    name: "Blueprint / craft night",
    blurb: "Blueprint hunt then workbench — no forged recipe costs.",
    map: "map-2",
    focus: "blueprint",
    hideout: "workbench",
    notesHint: "Blueprint names Unknown on Steam — confirm before sharing as fact.",
  },
  {
    name: "Hideout upgrade night",
    blurb: "Spend at Base; raid slots stay player-logged.",
    map: "starter",
    focus: "hideout",
    hideout: "base-upgrade",
    notesHint: "Hideout module costs: Unknown on store — budget in-client only.",
  },
  {
    name: "Quest / clue run",
    blurb: "NPC quests and story clues — put Unknown quest names in notes.",
    map: "map-2",
    focus: "quest",
    notesHint: "Quest/NPC names Unknown on Steam — confirm in-client.",
  },
];

const RAID_CHECKLIST = [
  "Confirm you are on the intended map in-client (official names: Unknown on Steam).",
  "Log only gear you actually own — empty slots stay Unknown, never filled with DPS guesses.",
  "Steam loop reminder: scavenge → extract → sell/craft → upgrade hideout & gear → quests.",
  "If this is a hideout night, set hideout focus and keep raid greed low.",
  "Do not paste third-party DPS / drop tables into notes and treat them as official.",
] as const;

function mapLabel(id: MapId) {
  return MAP_OPTIONS.find((o) => o.id === id)?.label ?? "—";
}

function focusLabel(id: FocusId) {
  return FOCUS_OPTIONS.find((o) => o.id === id)?.label ?? "—";
}

function hideoutLabel(id: HideoutId) {
  return HIDEOUT_OPTIONS.find((o) => o.id === id)?.label ?? "—";
}

function sanitizeNotes(raw: string | null): string {
  if (!raw) return "";
  return raw.replace(/[\u0000-\u001F\u007F]/g, "").trim().slice(0, NOTES_MAX);
}

function sanitizeField(raw: string | null, max = 48): string {
  if (!raw) return "";
  return raw.replace(/[\u0000-\u001F\u007F]/g, "").trim().slice(0, max);
}

type State = {
  map: MapId;
  customMap: string;
  primary: string;
  secondary: string;
  melee: string;
  armor: string;
  focus: FocusId;
  hideout: HideoutId;
  notes: string;
};

function selectionToSearch(s: State): string {
  const q = new URLSearchParams();
  if (s.map) q.set("map", s.map);
  if (s.customMap) q.set("mname", s.customMap);
  if (s.primary) q.set("primary", s.primary);
  if (s.secondary) q.set("secondary", s.secondary);
  if (s.melee) q.set("melee", s.melee);
  if (s.armor) q.set("armor", s.armor);
  if (s.focus) q.set("focus", s.focus);
  if (s.hideout) q.set("hideout", s.hideout);
  const n = sanitizeNotes(s.notes);
  if (n) q.set("notes", n);
  const qs = q.toString();
  return qs ? `?${qs}` : "";
}

function shareUrlFor(s: State): string {
  if (typeof window === "undefined") return "";
  const url = new URL(window.location.href);
  url.search = selectionToSearch(s);
  url.hash = "";
  return url.toString();
}

function writeUrl(s: State) {
  if (typeof window === "undefined") return;
  const next = `${window.location.pathname}${selectionToSearch(s)}${window.location.hash}`;
  window.history.replaceState(null, "", next);
}

export function RaidLoadoutTool() {
  const [map, setMap] = useState<MapId>("");
  const [customMap, setCustomMap] = useState("");
  const [primary, setPrimary] = useState("");
  const [secondary, setSecondary] = useState("");
  const [melee, setMelee] = useState("");
  const [armor, setArmor] = useState("");
  const [focus, setFocus] = useState<FocusId>("");
  const [hideout, setHideout] = useState<HideoutId>("");
  const [notes, setNotes] = useState("");
  const [copied, setCopied] = useState(false);
  const [linkCopied, setLinkCopied] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  const state: State = useMemo(
    () => ({
      map,
      customMap,
      primary,
      secondary,
      melee,
      armor,
      focus,
      hideout,
      notes,
    }),
    [map, customMap, primary, secondary, melee, armor, focus, hideout, notes],
  );

  useEffect(() => {
    try {
      const q = new URLSearchParams(window.location.search);
      const m = (q.get("map") || "") as MapId;
      if (MAP_OPTIONS.some((o) => o.id === m)) setMap(m);
      setCustomMap(sanitizeField(q.get("mname")));
      setPrimary(sanitizeField(q.get("primary")));
      setSecondary(sanitizeField(q.get("secondary")));
      setMelee(sanitizeField(q.get("melee")));
      setArmor(sanitizeField(q.get("armor")));
      const f = (q.get("focus") || "") as FocusId;
      if (FOCUS_OPTIONS.some((o) => o.id === f)) setFocus(f);
      const h = (q.get("hideout") || "") as HideoutId;
      if (HIDEOUT_OPTIONS.some((o) => o.id === h)) setHideout(h);
      setNotes(sanitizeNotes(q.get("notes")));
    } catch {
      /* ignore */
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    writeUrl(state);
  }, [hydrated, state]);

  const displayMap =
    map === "custom"
      ? customMap.trim() || "Custom (unnamed)"
      : map
        ? mapLabel(map)
        : "";

  const filledSlots = [primary, secondary, melee, armor].filter((s) =>
    s.trim(),
  ).length;
  const hasPlan = Boolean(
    map || focus || hideout || filledSlots > 0 || notes.trim(),
  );

  const shareText = useMemo(() => {
    const lines = [
      "Escape From Duckov raid + hideout log (fan wiki — not official DPS sheet)",
      `Map: ${displayMap || "— (Unknown)"}`,
      `Focus: ${focus ? focusLabel(focus) : "—"}`,
      `Hideout: ${hideout ? hideoutLabel(hideout) : "—"}`,
      `Primary: ${primary.trim() || "— (Unknown)"}`,
      `Secondary: ${secondary.trim() || "— (Unknown)"}`,
      `Melee: ${melee.trim() || "— (Unknown)"}`,
      `Armor: ${armor.trim() || "— (Unknown)"}`,
      `Notes: ${sanitizeNotes(notes) || "—"}`,
      "Map/weapon/hideout catalogs & DPS: not published on Steam store — mark Unknown.",
    ];
    if (typeof window !== "undefined") {
      lines.push(`Link: ${shareUrlFor(state)}`);
    }
    return lines.join("\n");
  }, [displayMap, focus, hideout, primary, secondary, melee, armor, notes, state]);

  const clearAll = useCallback(() => {
    setMap("");
    setCustomMap("");
    setPrimary("");
    setSecondary("");
    setMelee("");
    setArmor("");
    setFocus("");
    setHideout("");
    setNotes("");
    setCopied(false);
    setLinkCopied(false);
  }, []);

  const copyLog = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(shareText);
      setCopied(true);
      setLinkCopied(false);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }, [shareText]);

  const copyLink = useCallback(async () => {
    try {
      writeUrl(state);
      const url = shareUrlFor(state);
      await navigator.clipboard.writeText(url);
      setLinkCopied(true);
      setCopied(false);
      window.setTimeout(() => setLinkCopied(false), 2000);
    } catch {
      setLinkCopied(false);
    }
  }, [state]);

  return (
    <div className="space-y-6 rounded-xl border border-banana/40 bg-panel p-5">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h2 className="text-xl font-semibold text-banana">
            Raid loadout + hideout planner
          </h2>
          <p className="mt-1 text-sm text-muted">
            Pick a map, optionally set a Steam-aligned session and hideout focus,
            then log{" "}
            <strong className="text-foreground">primary</strong>,{" "}
            <strong className="text-foreground">secondary</strong>,{" "}
            <strong className="text-foreground">melee</strong>, and{" "}
            <strong className="text-foreground">armor</strong> with honest{" "}
            <strong className="text-foreground">Unknown</strong> labels. Share via
            URL. Not a DPS cheat sheet — no invented damage tables.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={clearAll}
            className="rounded-full border border-line px-3 py-1.5 text-xs font-semibold text-muted hover:border-banana hover:text-banana"
          >
            Reset
          </button>
          <button
            type="button"
            onClick={copyLink}
            disabled={!hasPlan}
            className="rounded-full border border-banana/60 px-3 py-1.5 text-xs font-semibold text-banana disabled:cursor-not-allowed disabled:opacity-40 hover:bg-panel-2"
          >
            {linkCopied ? "Link copied" : "Copy link"}
          </button>
          <button
            type="button"
            onClick={copyLog}
            disabled={!hasPlan}
            className="rounded-full bg-banana px-3 py-1.5 text-xs font-semibold text-background disabled:cursor-not-allowed disabled:opacity-40 hover:brightness-110"
          >
            {copied ? "Copied" : "Copy log"}
          </button>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-wide text-muted">
          Presets
        </p>
        <div className="flex flex-wrap gap-2">
          {PRESETS.map((preset) => (
            <button
              key={preset.name}
              type="button"
              title={preset.blurb}
              onClick={() => {
                setMap(preset.map);
                setFocus(preset.focus);
                setHideout(preset.hideout ?? "");
                if (preset.notesHint) {
                  setNotes(preset.notesHint.slice(0, NOTES_MAX));
                }
                setCopied(false);
                setLinkCopied(false);
              }}
              className="rounded-full border border-banana/50 px-3 py-1.5 text-xs font-semibold text-banana hover:bg-panel-2"
            >
              {preset.name}
            </button>
          ))}
        </div>
        <ul className="space-y-1 text-xs leading-5 text-muted">
          {PRESETS.map((preset) => (
            <li key={`${preset.name}-blurb`}>
              <span className="font-semibold text-foreground/80">
                {preset.name}:
              </span>{" "}
              {preset.blurb}
            </li>
          ))}
        </ul>
        <p className="text-xs leading-5 text-muted">
          First session notes:{" "}
          <Link
            href="/guides/beginner"
            className="font-semibold text-banana underline-offset-2 hover:underline"
          >
            Beginner guide
          </Link>
          {" · "}
          <Link
            href="/faq"
            className="font-semibold text-banana underline-offset-2 hover:underline"
          >
            FAQ
          </Link>
        </p>
      </div>

      <label className="block rounded-lg border border-line bg-panel-2 p-3">
        <span className="flex items-center justify-between gap-2 text-xs font-semibold uppercase tracking-wide text-muted">
          <span>Map</span>
          {!map ? (
            <span className="rounded-full border border-banana/40 px-2 py-0.5 text-[0.65rem] font-semibold normal-case tracking-normal text-banana">
              Unknown until selected
            </span>
          ) : null}
        </span>
        <select
          className="mt-2 w-full rounded border border-line bg-background px-2 py-2 text-sm text-foreground"
          value={map}
          onChange={(e) => setMap(e.target.value as MapId)}
        >
          {MAP_OPTIONS.map((opt) => (
            <option key={opt.id || "empty"} value={opt.id}>
              {opt.label}
            </option>
          ))}
        </select>
        <span className="mt-1 block text-[0.7rem] leading-4 text-muted">
          {MAP_OPTIONS.find((o) => o.id === map)?.hint}
        </span>
      </label>

      {map === "custom" ? (
        <label className="block rounded-lg border border-line bg-panel-2 p-3">
          <span className="text-xs font-semibold uppercase tracking-wide text-muted">
            Custom map name (your log)
          </span>
          <input
            type="text"
            className="mt-2 w-full rounded border border-line bg-background px-2 py-2 text-sm text-foreground"
            placeholder="In-game map name once confirmed…"
            value={customMap}
            maxLength={48}
            onChange={(e) => setCustomMap(sanitizeField(e.target.value))}
          />
        </label>
      ) : null}

      <div className="grid gap-3 sm:grid-cols-2">
        <label className="block rounded-lg border border-line bg-panel-2 p-3">
          <span className="text-xs font-semibold uppercase tracking-wide text-muted">
            Session focus (Steam-aligned)
          </span>
          <select
            className="mt-2 w-full rounded border border-line bg-background px-2 py-2 text-sm text-foreground"
            value={focus}
            onChange={(e) => setFocus(e.target.value as FocusId)}
          >
            {FOCUS_OPTIONS.map((opt) => (
              <option key={opt.id || "empty-focus"} value={opt.id}>
                {opt.label}
              </option>
            ))}
          </select>
          <span className="mt-1 block text-[0.7rem] leading-4 text-muted">
            {FOCUS_OPTIONS.find((o) => o.id === focus)?.hint}
          </span>
        </label>

        <label className="block rounded-lg border border-line bg-panel-2 p-3">
          <span className="text-xs font-semibold uppercase tracking-wide text-muted">
            Hideout planner focus
          </span>
          <select
            className="mt-2 w-full rounded border border-line bg-background px-2 py-2 text-sm text-foreground"
            value={hideout}
            onChange={(e) => setHideout(e.target.value as HideoutId)}
          >
            {HIDEOUT_OPTIONS.map((opt) => (
              <option key={opt.id || "empty-hideout"} value={opt.id}>
                {opt.label}
              </option>
            ))}
          </select>
          <span className="mt-1 block text-[0.7rem] leading-4 text-muted">
            {HIDEOUT_OPTIONS.find((o) => o.id === hideout)?.hint}
          </span>
        </label>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {(
          [
            {
              key: "primary",
              label: "Primary weapon",
              value: primary,
              set: setPrimary,
              hint: "Steam: 50+ weapons + mods — DPS Unknown on store",
              ph: "Name once confirmed…",
            },
            {
              key: "secondary",
              label: "Secondary / backup",
              value: secondary,
              set: setSecondary,
              hint: "Stats / unlocks: Unknown on store",
              ph: "Name once confirmed…",
            },
            {
              key: "melee",
              label: "Melee slot",
              value: melee,
              set: setMelee,
              hint: "Steam mentions wooden stick → top-tier firearms range",
              ph: "Name once confirmed…",
            },
            {
              key: "armor",
              label: "Armor / gear slot",
              value: armor,
              set: setArmor,
              hint: "Steam: upgrade gear / blueprints — names Unknown on store",
              ph: "Name once confirmed…",
            },
          ] as const
        ).map((slot) => (
          <label
            key={slot.key}
            className="block rounded-lg border border-line bg-panel-2 p-3"
          >
            <span className="flex items-center justify-between gap-2 text-xs font-semibold uppercase tracking-wide text-muted">
              <span>{slot.label}</span>
              {!slot.value.trim() ? (
                <span className="rounded-full border border-line px-2 py-0.5 text-[0.65rem] font-semibold normal-case tracking-normal text-muted">
                  Unknown
                </span>
              ) : null}
            </span>
            <input
              type="text"
              className="mt-2 w-full rounded border border-line bg-background px-2 py-2 text-sm text-foreground"
              placeholder={slot.ph}
              value={slot.value}
              maxLength={48}
              onChange={(e) => slot.set(sanitizeField(e.target.value))}
            />
            <span className="mt-1 block text-[0.7rem] leading-4 text-muted">
              {slot.hint}
            </span>
          </label>
        ))}
      </div>

      <label className="block rounded-lg border border-line bg-panel-2 p-3">
        <span className="flex items-center justify-between gap-2 text-xs font-semibold uppercase tracking-wide text-muted">
          <span>Notes (optional, in share URL)</span>
          <span className="font-normal normal-case tracking-normal">
            {sanitizeNotes(notes).length}/{NOTES_MAX}
          </span>
        </span>
        <input
          type="text"
          maxLength={NOTES_MAX}
          value={notes}
          onChange={(e) => setNotes(sanitizeNotes(e.target.value))}
          placeholder="e.g. extract early · quest Unknown · workbench night"
          className="mt-2 w-full rounded border border-line bg-background px-2 py-2 text-sm text-foreground placeholder:text-muted/70"
        />
        <span className="mt-1 block text-xs text-muted">
          Extract plan, quest names, or hideout budget notes — no pasted DPS
          grids. Encoded as <code className="text-foreground/80">notes=</code>{" "}
          in Copy link.
        </span>
      </label>

      <div className="rounded-lg border border-banana/30 bg-panel-2 px-4 py-3">
        <h3 className="text-xs font-semibold uppercase tracking-wide text-banana">
          Raid / hideout checklist
        </h3>
        <p className="mt-1 text-xs text-muted">
          Steam-aligned habits only — this is a personal planner log, not an
          official damage sheet.
        </p>
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-6 text-foreground/90">
          {RAID_CHECKLIST.map((item) => (
            <li key={item.slice(0, 40)}>{item}</li>
          ))}
        </ol>
        <p className="mt-3 text-xs text-muted">
          First-session framing:{" "}
          <Link
            href="/guides/beginner"
            className="font-semibold text-banana underline-offset-2 hover:underline"
          >
            /guides/beginner
          </Link>
          . Why no DPS sheets:{" "}
          <Link
            href="/faq"
            className="font-semibold text-banana underline-offset-2 hover:underline"
          >
            /faq
          </Link>
          .
        </p>
      </div>

      <div
        className="rounded-lg border border-banana/50 bg-banana/10 px-4 py-4 text-sm text-foreground"
        role="status"
      >
        <p className="font-semibold text-banana">
          {hasPlan
            ? displayMap
              ? `Loadout log: ${displayMap}`
              : `Loadout log: ${filledSlots}/4 gear slots named`
            : "Pick a map or focus, then log weapons / armor / hideout"}
        </p>
        <p className="mt-2 leading-6 text-muted">
          Player-logged names only. Map, weapon, armor, and hideout
          stats/recipes: Unknown on Steam — confirm in-client. This is not an
          official DPS cheat sheet.
        </p>
        {hasPlan ? (
          <ul className="mt-3 space-y-1 text-muted">
            {displayMap ? (
              <li>
                Map: <span className="text-foreground">{displayMap}</span>
              </li>
            ) : null}
            {focus ? (
              <li>
                Focus:{" "}
                <span className="text-foreground">{focusLabel(focus)}</span>
              </li>
            ) : null}
            {hideout ? (
              <li>
                Hideout:{" "}
                <span className="text-foreground">{hideoutLabel(hideout)}</span>
              </li>
            ) : null}
            <li>
              Primary:{" "}
              <span className="text-foreground">
                {primary.trim() || "— (Unknown)"}
              </span>
            </li>
            <li>
              Secondary:{" "}
              <span className="text-foreground">
                {secondary.trim() || "— (Unknown)"}
              </span>
            </li>
            <li>
              Melee:{" "}
              <span className="text-foreground">
                {melee.trim() || "— (Unknown)"}
              </span>
            </li>
            <li>
              Armor:{" "}
              <span className="text-foreground">
                {armor.trim() || "— (Unknown)"}
              </span>
            </li>
            {sanitizeNotes(notes) ? (
              <li>
                Notes:{" "}
                <span className="text-foreground">{sanitizeNotes(notes)}</span>
              </li>
            ) : null}
          </ul>
        ) : null}
      </div>

      <div className="rounded-lg border border-line bg-panel-2 px-4 py-3">
        <h3 className="text-xs font-semibold uppercase tracking-wide text-banana">
          Copyable loadout
        </h3>
        <pre className="mt-2 whitespace-pre-wrap font-mono text-xs leading-6 text-foreground/90">
          {shareText}
        </pre>
      </div>
    </div>
  );
}
