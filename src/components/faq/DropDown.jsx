import "../../App.css";

function DropDown({title, content, open = "false"}) {
  return (
    <details className="group details pb-5" name="faq" open={open}>
      <summary className="list-none cursor-pointer text-white items-center bg-[#A4161A] shadow-[0px_8px_2px_rgba(0,_0,_0,_0.21)] font-semibold py-4 px-7 flex w-full justify-between">
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
      <div className="bg-white text-[#3D3D3D] shadow-[0px_8px_2px_rgba(0,_0,_0,_0.21)] text-sm pt-2 pb-4 px-6 rounded-bl-xl rounded-br-xl">
        {content}
      </div>
    </details>
  );
}

export default DropDown;
