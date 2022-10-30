import { ReactComponent as EditLogo } from "../imgs/edit.svg";
import ResourceDetail from "./ResourceDetail";

function ResourceSection({ data, bgColor }) {
  return (
    <section className={`flex flex-col items-center py-10 gap-10 ${bgColor}`}>
      <header className="flex flex-col items-center gap-5">
        <EditLogo className="w-14 h-14" />
        <h3 className="uppercase tracking-widest text-xl">Development Tools</h3>
      </header>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {data.map((resourceDetail, index) => (
          <ResourceDetail
            key={index}
            resourceDetail={resourceDetail}
          ></ResourceDetail>
        ))}
      </div>
    </section>
  );
}

export default ResourceSection;
