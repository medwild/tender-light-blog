import type { AdSlotName } from "../../content/types";
import {
  adSlotLabel,
  normalizeAdSlot,
  CANONICAL_AD_SLOTS,
} from "../../content/monetization";

/**
 * §21 — Reserved AdSense slot. The dashed frame marks exactly where an ad
 * unit will render once the account is approved; the slot number tells the
 * ops team which of the 5 canonical positions this is. Swap the inner
 * <ins> placeholder for the real AdSense <ins class="adsbygoogle"> tag.
 */
export default function AdPlacement({ slot }: { slot: AdSlotName }) {
  const position = CANONICAL_AD_SLOTS.indexOf(normalizeAdSlot(slot)) + 1;
  return (
    <aside
      aria-label="Advertisement"
      className="grid place-items-center rounded-xl border border-dashed border-line bg-paper/70 px-6 py-10 transition-colors duration-300 hover:border-gold-deep/50"
    >
      <div className="text-center">
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-ink-faint">
          Advertisement
        </p>
        <p className="mt-2 text-xs text-ink-faint">
          <span className="font-semibold text-gold-deep">{adSlotLabel(slot)}</span>
          {" · AdSense slot "}
          <span className="font-mono font-semibold text-ink-soft">
            {position}/5
          </span>
        </p>
      </div>
    </aside>
  );
}
