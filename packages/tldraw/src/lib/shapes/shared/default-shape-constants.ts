import { TLDefaultFontStyle, TLDefaultSizeStyle } from '@bigbluebutton/editor'

/** @public */
export const TEXT_PROPS = {
	lineHeight: 1.35,
	fontWeight: 'normal',
	fontVariant: 'normal',
	fontStyle: 'normal',
	padding: '0px',
}

/** @public */
export const STROKE_SIZES: Record<TLDefaultSizeStyle, number> = {
	s: 1,
	m: 1.75,
	l: 2.5,
	xl: 5,
}

/**
 * STROKE_SIZES were halved to make lines thinner. Geometry that was derived from the stroke
 * width (dash spacing, corner roundness, sketchy wobble, etc.) is multiplied by this factor so
 * those details keep their original size. Must stay in sync with the arrowhead multipliers in
 * packages/editor/src/lib/editor/shapes/shared/arrow/arrowheads.ts.
 *
 * @internal
 */
export const STROKE_DETAIL_SCALE = 2

/** @public */
export const FONT_SIZES: Record<TLDefaultSizeStyle, number> = {
	s: 18,
	m: 24,
	l: 36,
	xl: 44,
}

/** @public */
export const LABEL_FONT_SIZES: Record<TLDefaultSizeStyle, number> = {
	s: 18,
	m: 22,
	l: 26,
	xl: 32,
}

/** @public */
export const ARROW_LABEL_FONT_SIZES: Record<TLDefaultSizeStyle, number> = {
	s: 18,
	m: 20,
	l: 24,
	xl: 28,
}

/** @public */
export const FONT_FAMILIES: Record<TLDefaultFontStyle, string> = {
	draw: 'var(--tl-font-draw)',
	sans: 'var(--tl-font-sans)',
	serif: 'var(--tl-font-serif)',
	mono: 'var(--tl-font-mono)',
}

/** @internal */
export const MIN_ARROW_LENGTH = 48
/** @internal */
export const BOUND_ARROW_OFFSET = 10
/** @internal */
export const WAY_TOO_BIG_ARROW_BEND_FACTOR = 10
