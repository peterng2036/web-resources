import { ReactComponent as Logo } from "../imgs/logo.svg";

function Header() {
  return (
    <header className="flex flex-col items-center justify-center gap-20 bg-sky-50 p-10">
      <Logo className="w-10/12" />

      <h2 className="text-3xl tracking-wider text-gray-600 text-center">
        Resources for creating
        <strong> beautiful </strong>
        and
        <strong> performant </strong>
        websites
      </h2>

      <form className="w-10/12 max-w-2xl" onSubmit={onSearchFormSubmit}>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
        >
          Search
        </label>
        <div className="relative">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:outline-none "
            placeholder="Search "
            required=""
          />
        </div>
      </form>
    </header>
  );
}

function onSearchFormSubmit(e) {
  e.preventDefault();
}

export default Header;
