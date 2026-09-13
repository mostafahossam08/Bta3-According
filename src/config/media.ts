// ---------------------------------------------------------------------------
// Centralized media / asset configuration
// ---------------------------------------------------------------------------
// Every optional real photo, cover or video used across the site is
// controlled from this single file. Each entry has:
//   - path:    where the real file lives under /public
//   - enabled: whether the real file should be shown
//
// When `enabled` is false (the default until real assets are supplied), the
// site falls back to the existing hand-built placeholder visuals in
// src/components/ui/asset-mockups.tsx — never a broken image or video.
//
// To go live with a real asset:
//   1. Drop the file into the matching /public path below.
//   2. Flip that entry's `enabled` to true.
// No component code needs to change.
//
// The keys below intentionally match the `assetId` values already used by
// <CoverMockup />, <PreviewMockup /> and <PersonalizedMockup /> in
// src/components/ui/asset-mockups.tsx.
// ---------------------------------------------------------------------------

export interface MediaAsset {
  path: string;
  enabled: boolean;
}

export const media: Record<string, MediaAsset> = {
  BRAND_LOGO: { path: "/images/logo.png", enabled: true },
  INTRO_VIDEO: { path: "/video/intro.mp4", enabled: false },
  PHYSICS_GRADE9_COVER: { path: "/images/grade9-cover.jpg", enabled: false },
  PHYSICS_GRADE10_COVER: { path: "/images/grade10-cover.jpg", enabled: false },
  CLASSIFIED_PREVIEW_01: { path: "/images/classified-preview.jpg", enabled: false },
  PERSONALIZED_COVER_01: { path: "/images/personalized-cover.jpg", enabled: false },
  CUSTOM_DESIGN_01: { path: "/images/custom-design.jpg", enabled: false },
};

// Poster shown behind the intro video before it loads / while disabled.
export const INTRO_VIDEO_POSTER = "CLASSIFIED_PREVIEW_01";

// InstaPay number for the Payment Method section (see section 8 of the spec).
export const INSTAPAY_NUMBER = "01212376887";