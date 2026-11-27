# Button

Input for AI. Generate Figma and code from this file. Use tokens only. Never use a raw value.

## Purpose
- Start one action. Reason: a button that navigates is a link.

## Variants
- `primary`: one per view. Reason: one clear main action.
- `secondary`: outlined. Use for other actions.
- `tertiary`: text only. Use for low-priority actions.

## Sizes
| Size | Height | Padding X | Text token |
|---|---|---|---|
| sm | `space.32` | `space.12` | `font.size.ui.sm` |
| md (default) | `space.40` | `space.16` | `font.size.ui.md` |
| lg | `space.48` | `space.24` | `font.size.ui.lg` |

## Rules
- Use `border.radius.none`. Reason: square corners are the brand default.
- Use `font.weight.semibold` and `font.family.brand`. Reason: the reference defines button text as semibold.
- Use `border.width.sm` for the secondary outline.
- Animate only color. Use `motion.duration.fast` and `motion.easing.standard`. Reason: the brand forbids fades and linear easing.
- Show focus with a `border.width.md` outline in `color.border.focus`. Offset it by `space.4`. Reason: keyboard users must see focus.
- Use a native `<button>`. Set `type="button"` by default. Reason: free keyboard and screen-reader support.
- Disabled: use `disabled`, `color.action.disabled.*`, no hover. Reason: no feedback tells the user the action is unavailable.
- Label: use a verb. Keep it short. Reason: users scan labels.

## States
default, hover, active, focus-visible, disabled. Colors: `color.action.<variant>.*`.

## Open points
- Interaction colors are inferred. No reference defines them.
- Icon-only and loading states are not defined.
