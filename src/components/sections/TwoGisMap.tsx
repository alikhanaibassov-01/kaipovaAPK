type TwoGisMapProps = {
  firmId: string;
  lat: number;
  lon: number;
  height?: number;
};

function buildWidgetSrc(firmId: string, lat: number, lon: number) {
  const options = {
    pos: { lat, lon, zoom: 16 },
    opt: { city: "almaty", ref: "hidden" },
    org: firmId,
  };

  return `https://widgets.2gis.com/widget?type=firmsonmap&options=${encodeURIComponent(
    JSON.stringify(options),
  )}`;
}

export function TwoGisMap({
  firmId,
  lat,
  lon,
  height = 400,
}: TwoGisMapProps) {
  return (
    <iframe
      title="Колледж принтмедиа технологий на карте 2ГИС"
      src={buildWidgetSrc(firmId, lat, lon)}
      width="100%"
      height={height}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="block w-full rounded-xl border border-border bg-surface"
      style={{ border: "1px solid #e5e0d8", boxSizing: "border-box" }}
    />
  );
}
