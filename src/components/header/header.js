import "./header.css";

export default function Header() {
    // const primayColor = '#1877F2';
    return (
        <>
            <header>
                <div className="header_left">
                    <link rel="icon" href="favicon.ico" />
                </div>
                <div className="search">
                    <input type="Text" placeholder="Tìm kiếm trên facebook" className="input" />
                </div>
                <div className="header_right"></div>
                <div className="header_middle"></div>
            </header>
        </>
    )
}