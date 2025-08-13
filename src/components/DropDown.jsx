function DropDown({title, styleTitle, content, styleContent, name, open = "false",}) {
  return (
    <details className="group details pb-5" name={name} open={open}>
      <summary className={`list-none cursor-pointer text-white items-center shadow-[0px_8px_2px_rgba(0,_0,_0,_0.21)] font-semibold py-4 px-7 flex w-full justify-between`} style={styleTitle}>
        {title}
        <svg
          width="25"
          height="13"
          viewBox="0 0 33 20"
          fill="none"
          className="rotate-90 group-open:rotate-0 duration-300"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M14.7249 18.7336L0.046344 4.21378L3.67565 0.544783L16.5197 13.2499L29.2249 0.405832L32.8939 4.03514L18.3741 18.7137C17.8928 19.2002 17.2379 19.4755 16.5536 19.4792C15.8693 19.483 15.2115 19.2147 14.7249 18.7336Z"
            fill="#EBEAEA"
          />
        </svg>
      </summary>
      <div className={`shadow-[0px_8px_2px_rgba(0,_0,_0,_0.21)] text-sm pt-2 pb-4 px-6 rounded-bl-xl rounded-br-xl`} style={styleContent}>
        {content}
      </div>
    </details>
  );
}

export default DropDown;
