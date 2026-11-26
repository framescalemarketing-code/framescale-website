export type Metric = {
  /** The number itself, pre-formatted. "38%", "2.4x", "11 months". */
  value: string;
  label: string;
  /** Optional qualifier: the period measured, the baseline, the caveat. */
  note?: string;
};

type StatRowProps = {
  metrics: Metric[];
  /**
   * Required, not optional, and that is the point. Terms of Service states that
   * no specific result is guaranteed, so a published number must never appear
   * without the line saying it describes one past engagement. Making this a
   * required prop means the rule is enforced by the compiler rather than by
   * whoever remembers it.
   */
  disclaimer: string;
};

export function StatRow({ metrics, disclaimer }: StatRowProps) {
  return (
    <div className="flex flex-col gap-4">
      <dl className="rule grid grid-cols-1 gap-x-8 gap-y-6 py-8 sm:grid-cols-2 md:grid-cols-3">
        {metrics.map((metric) => (
          <div key={metric.label} className="flex flex-col gap-1">
            <dt className="display-md text-(--brand-primary)">{metric.value}</dt>
            <dd className="flex flex-col gap-1">
              <span className="font-ui text-sm font-semibold text-(--brand-deep)">
                {metric.label}
              </span>
              {metric.note ? (
                <span className="font-body text-sm text-(--text-muted)">{metric.note}</span>
              ) : null}
            </dd>
          </div>
        ))}
      </dl>
      <p className="font-body text-sm text-(--text-muted)">{disclaimer}</p>
    </div>
  );
}
