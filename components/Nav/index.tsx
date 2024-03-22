import Link from "next/link";

const Nav = () => {
  return (
    <nav className="navbar flex h-64 px-48 items-center bg-surface-feedback-green">
      <Link href="/">VOLVO</Link>
    </nav>
  );
};

export default Nav;
