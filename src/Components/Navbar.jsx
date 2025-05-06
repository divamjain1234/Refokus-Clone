import Button from "./Button";

const Navbar = () => {
  return (
    <div className="w-[1000px] mx-auto py-6 text-white flex items-center justify-between border-b-[1px] border-zinc-700 font-[Satoshi]">
      <div className="n-left flex items-center">
      <h1>Refokus</h1>
      <div className="links flex gap-14 ml-20">
        {["Home", "Work", "Culture", "", "News"].map((elem, index) => (
          <a key={index} className="text-sm flex items-center gap-1" href="#">
            {elem.length === 0 ? (
              <span className="w-1 h-7 bg-zinc-700"></span>
            ) : (
              <>
                {index === 1 && (
                  <span
                    style={{ boxShadow: "0 0 0.45em #00FF19" }}
                    className="h-1 w-1 bg-green-600 rounded-full"
                  ></span>
                )}
                {elem}
              </>
            )}
          </a>
        ))}
      </div>
      </div>
     <Button></Button>
    </div>
  );
};

export default Navbar;
