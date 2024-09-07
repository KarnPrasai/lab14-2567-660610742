export default function Footer({year,name,id}:any) {
  return (
    <div>
      <p className="fs-dimmed">Copyright © {year} {name} {id}</p>
    </div>
  );
}
