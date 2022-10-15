export default function Category() {
  return (
    <div className="catergory container">
      <a href="#Men's_Clothing" className="catergoryItem">
        <div className="iconBox text-ceter">
          <img src="/images/man.png" alt="icon" className="img-fluid" />
        </div>
        <p className="catname"> Men's Clothing</p>
      </a>
      <a href="#Women's_Clothing" className="catergoryItem">
        <div className="iconBox text-ceter">
          <img src="/images/girl.png" alt="icon" className="img-fluid" />
        </div>
        <p className="catname"> Women's Clothing</p>
      </a>

      <a href="#Jewelery" className="catergoryItem">
        <div className="iconBox text-ceter">
          <img src="/images/rings.png" alt="icon" className="img-fluid" />
        </div>
        <p className="catname">Jewelery</p>
      </a>

      <a href="#Electronics" className="catergoryItem">
        <div className="iconBox text-ceter">
          <img src="/images/laptop.png" alt="icon" className="img-fluid" />
        </div>
        <p className="catname">Electronics</p>
      </a>
    </div>
  );
}
