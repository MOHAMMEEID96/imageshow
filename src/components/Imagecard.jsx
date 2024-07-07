export default function Imagecard({ image }) {
  const tags = image.tags.split(",");
  return (
    <div>
      <div className="max-w-80 rounded overflow-hidden shadow-2xl">
        <img src={image.webformatURL} alt="" className="w-full" />
        <div className="px-6 py-4">
          <div className="font-bold text-purple-500  mp-2">
            photo by {image.user}
          </div>
          <ul>
            <li>
              <strong>views:{image.views}</strong>
            </li>
            <li>
              <strong>Download:{image.downloads}</strong>
            </li>
            <li>
              <strong>likes:{image.likes}</strong>
            </li>
          </ul>
        </div>
        {tags.map((tag) => (
          <div
            key={image.id}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
          >
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
}
