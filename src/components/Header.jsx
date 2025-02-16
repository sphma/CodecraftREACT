import "../style.css";

const Header = () => {
  return (
    <header className="header">
        <h1 id="header-cust">Welcome to the <span id="special">CodeCraft</span> Labs Intranet</h1>
        <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="emp_mgmt.html">Employee Management</a></li>
                <li><a href="js3_sandbox.html">JS Sandbox</a></li>
            </ul>
        </nav>
    </header>
  );
};

export default Header;