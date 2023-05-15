const Header = () => {
	return (
		<nav className="red darken-4">
			<div className="container">
				<div className="nav-wrapper">
					<a href="/" className="brand-logo">
						React Shop
					</a>
					<ul id="nav-mobile" className="right hide-on-med-and-down">
						<li>
							<a href="https://github.com/">GitHub</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Header;
