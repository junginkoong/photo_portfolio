export default function BackgroundLines() {
    return (
        <div>
            {/* SVG Flow Line */}
            <svg
                className="absolute left-0 top-0 z-0"
                width="1"
                height={3250}
                style={{
                pointerEvents: "none",
                position: "absolute",
                height: "3250px",
                width: "100%",
                }}
            >
                {/* Vertical line from top to intro gap */}
                <line
                    x1="75%"
                    y1="0"
                    x2="75%"
                    y2="9%" // Adjust this value to match the bottom of your intro section
                    stroke="#d1d5db"
                    strokeWidth="1"
                    strokeLinecap="round"
                />
                <line
                    x1="75%"
                    y1="21%"
                    x2="75%"
                    y2="28%" // Adjust this value to match the bottom of your intro section
                    stroke="#d1d5db"
                    strokeWidth="1"
                    strokeLinecap="round"
                />
                {/* Angled line to center */}
                <line
                    x1="75%"
                    y1="28%"
                    x2="50%"// This will be handled in the next step
                    y2="30%"              // Adjust this value for the angle and position
                    stroke="#d1d5db"
                    strokeWidth="1"
                    strokeLinecap="round"
                />
                {/* Vertical line down the center */}
                <line
                    x1="50%"
                    y1="30%"
                    x2="50%"
                    y2="31.25%" // Adjust for your page length
                    stroke="#d1d5db"
                    strokeWidth="1"
                    strokeLinecap="round"
                />
                <line
                    x1="50%"
                    y1="69%"
                    x2="50%"
                    y2="70.1%" // Adjust for your page length
                    stroke="#d1d5db"
                    strokeWidth="1"
                    strokeLinecap="round"
                />
                <line
                    x1="50%"
                    y1="70.1%"
                    x2="45%"
                    y2="71%" // Adjust for your page length
                    stroke="#d1d5db"
                    strokeWidth="1"
                    strokeLinecap="round"
                />
                <line
                    x1="45%"
                    y1="71%"
                    x2="45%"
                    y2="95.8%" // Adjust for your page length
                    stroke="#d1d5db"
                    strokeWidth="1"
                    strokeLinecap="round"
                />
            </svg>
        </div>
    )
}