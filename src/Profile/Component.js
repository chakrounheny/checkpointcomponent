export default function Component({ Fullname, Bio,Prfession }) {
    return (
      <div className="component">
        <h2>{Fullname}</h2>
        <h3>{Bio}</h3>
        <h4>{Prfession}</h4>
      </div>
    );
  }