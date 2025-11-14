export default function Navbar() {
console.log("Navbar component rendered");
  return (
    <nav className="navbar">
      <h1 className="logo">Hackflix</h1>
      <a href="#" className="nav-link">Home</a>
    </nav>
  );
}