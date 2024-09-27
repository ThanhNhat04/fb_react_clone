import "./style.css";

export default function Header() {
    return (
        <header>
            <div className="header_left">
                <link to="/" className="header_logo">
                    <div className="header_circle">
                    </div>
                </link>
            </div>
            <div className="search">
                <input type="Text" placeholder="Tìm kiếm trên facebook" className="input" />
            </div>
            <div className="header_right"></div>
            <div className="header_middle"></div>
        </header>
    )
}