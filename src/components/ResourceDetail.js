function ResourceDetail({ resourceDetail }) {
  return (
    <article
      className="flex flex-col 
    items-start 
    p-8 
    gap-5 
    shadow 
    w-96 
    hover:shadow-xl 
    transition-shadow"
    >
      <img
        src={require(`../imgs/logos/${resourceDetail.iconName}`)}
        className="w-10 h-10"
        alt={`${resourceDetail.name} Logo`}
      />
      <a
        href={resourceDetail.url}
        target="_blank"
        rel="noreferrer"
        className="text-sky-600 font-bold text-lg"
      >
        {resourceDetail.name}
      </a>
      <p className="text-gray-600 leading-8">{resourceDetail.desc}</p>
    </article>
  );
}

export default ResourceDetail;
