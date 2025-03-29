import './userPage.css'
const UserPage = () => {
    const user = {useName:"Usuario_1"};
    const userPalettes = [
        { colors: ["#ABB", "#AAB", "#AAB", "#ABB", "#AAB", "#AAB"] },
        { colors: ["#AAA", "#AEE", "#000", "#FFF", "#0AF", "#FA0"] },
        { colors: ["#ABB", "#AAB", "#AAB", "#ABB", "#AAB", "#AAB"] },
        { colors: ["#ABB", "#AAB", "#AAB", "#ABB", "#AAB", "#AAB"] },
        { colors: ["#ABB", "#AAB", "#AAB", "#ABB", "#AAB", "#AAB"] }
    ];

    return (
        <>
            <main className="userPage w-full h-full flex items-center justify-center bg-gray-100 ">
                
                <section className="flex flex-col md:h-3/4 md:p-9 md:gap-5 justify-center bg-white palettes md:rounded-3xl border-2 border-black ">
                <p className="text-4xl">SAVED PALETTES</p>
                    {userPalettes.map((palette, paletteIndex) => (
                        <div className="flex rounded-xl overflow-hidden" key={paletteIndex}>
                            {palette.colors.map((color, colorIndex) => (
                                <div
                                    className="md:w-24 md:h-32 border border-black"
                                    key={`${paletteIndex}-${colorIndex}`}
                                    style={{ backgroundColor: color }}
                                ></div>
                            ))}
                        </div>
                    ))}
                </section>
            </main>
        </>
    );
};

export default UserPage;
