/**
 * ---------------------------------------------------------------------------
 * ASSET REGISTRY
 * ---------------------------------------------------------------------------
 * One place to swap placeholders for finals. Every entry is `null` today; the
 * component that consumes it already reserves the exact box the real asset
 * will occupy, so setting a path here changes pixels, never layout.
 *
 *   1. Drop the file into /public/assets/…
 *   2. Set the path below.
 *   3. Done. No component edits, no reflow.
 * ---------------------------------------------------------------------------
 */

export const assets = {
  /**
   * Hero face illustration living inside the word PORTFOLIO.
   *
   * `layers` is the preferred hand-off: export the illustration as four
   * transparent PNG/SVGs sharing ONE canvas (same width/height, nothing
   * re-cropped) and the blink / smile / eye-dart rig drives them directly.
   *
   *   base   — head, hair, brows, nose, beard. Everything that never moves.
   *   eyes   — the eye whites + irises only.
   *   lids   — the eyelid shape used for the blink (drawn over `eyes`).
   *   mouth  — neutral mouth only; the smile is a transform of this layer.
   *
   * `flat` is the fallback: a single image. It renders perfectly but can only
   * breathe (micro parallax + drift) — it cannot blink.
   */
  heroFace: {
    flat: null as string | null,
    layers: null as { base: string; eyes: string; lids: string; mouth: string } | null,
  },

  /**
   * Section 02, left frame.
   *
   * A video wins over a still; the frame's geometry comes from tokens.ts
   * either way, so swapping between them moves nothing on the page. To change
   * the artwork later, change `video` (and regenerate `poster` from its first
   * frame) — nothing else on the site refers to the file.
   *
   * The current clip is 720 x 1280 and the frame is 144 : 335, so `cover`
   * trims about 12% off each side — empty backdrop either side of the figure,
   * and the full head-to-feet height is kept.
   */
  frame: {
    video: null as string | null,
    poster: null as string | null,
    image: '/assets/mohamed-full.jpg' as string | null,
    fit: 'cover' as 'cover' | 'contain',
    /** Centre the subject in the frame. */
    position: '50% 50%',
    /** Set null so the portrait photo is not keyed out. */
    key: null as { low: number; high: number } | null,
  },

  /**
   * Cut-out bust for the black strip, standing in front of the moving type.
   */
  nameCutout: {
    src: '/assets/mohamed-headshot.jpg' as string | null,
    width: 600,
    height: 769,
    sticker: false,
  },

  /**
   * Small round avatar inside the floating contact note.
   */
  avatar: '/assets/mohamed-headshot.jpg' as string | null,

  /**
   * THE STU — three photographs, left to right. Drop files into
   * /public/assets/projects/ and list them here.
   *
   * The Polaroid geometry is fixed by the card, not by the image: 1.24
   * landscape, cropped with object-fit: cover. Nudge `objectPosition` in
   * site.studio.items if a subject sits off centre.
   */
  studio: [
    '/assets/projects/studio-01.webp',
    '/assets/projects/studio-02.webp',
    '/assets/projects/studio-03.webp',
  ] as (string | null)[],

  /**
   * Signature graphic for the footer — the designer signing the last page.
   * Until it arrives, the name is set in the hand font with a red tick, so
   * the page is already signed and the slot already has its place.
   */
  signature: null as string | null,
} as const
