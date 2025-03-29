import Palette from "../palette/palette";

const SearchPage = () => {
    const palettesColors = [
        { colors: ["#AAA","#BBB","#111","#000","#555"]},
        { colors: ["#AAA","#BBB","#111","#000","#555"]},
        { colors: ["#AAA","#BBB","#111","#000","#555"]},
        { colors: ["#AAA","#BBB","#111","#000","#555"]},
        { colors: ["#AAA","#BBB","#111","#000","#555"]},
        { colors: ["#AAA","#BBB","#111","#000","#555"]},
        { colors: ["#AAA","#BBB","#111","#000","#555"]},
        { colors: ["#AAA","#BBB","#111","#000","#555"]},
        { colors: ["#AAA","#BBB","#111","#000","#555"]},
        { colors: ["#AAA","#BBB","#111","#000","#555"]},
        { colors: ["#AAA","#BBB","#111","#000","#555"]},
        { colors: ["#AAA","#BBB","#111","#000","#555"]},
        { colors: ["#AAA","#BBB","#111","#000","#555"]},
        { colors: ["#AAA","#BBB","#111","#000","#555"]},
        { colors: ["#AAA","#BBB","#111","#000","#555"]},
        { colors: ["#AAA","#BBB","#111","#000","#555"]},
        { colors: ["#AAA","#BBB","#111","#000","#555"]},
        { colors: ["#AAA","#BBB","#111","#000","#555"]},
        { colors: ["#AAA","#BBB","#111","#000","#555"]},
        { colors: ["#AAA","#BBB","#111","#000","#555"]},
        { colors: ["#AAA","#BBB","#111","#000","#555"]},
        { colors: ["#AAA","#BBB","#111","#000","#555"]},
        { colors: ["#AAA","#BBB","#111","#000","#555"]},
        { colors: ["#AAA","#BBB","#111","#000","#555"]},
        { colors: ["#AAA","#BBB","#111","#000","#555"]},
        { colors: ["#AAA","#BBB","#111","#000","#555"]},
        { colors: ["#AAA","#BBB","#111","#000","#555"]},
        { colors: ["#AAA","#BBB","#111","#000","#555"]},
        { colors: ["#AAA","#BBB","#111","#000","#555"]},
        { colors: ["#AAA","#BBB","#111","#000","#555"]},
        { colors: ["#AAA","#BBB","#111","#000","#555"]},
        { colors: ["#AAA","#BBB","#111","#000","#555"]},
        { colors: ["#AAA","#BBB","#111","#000","#555"]},
        { colors: ["#AAA","#BBB","#111","#000","#555"]},
        { colors: ["#AAA","#BBB","#111","#000","#555"]},
        { colors: ["#AAA","#BBB","#111","#000","#555"]},
        { colors: ["#AAA","#BBB","#111","#000","#555"]},
        { colors: ["#AAA","#BBB","#111","#000","#555"]},
        { colors: ["#AAA","#BBB","#111","#000","#555"]},
        { colors: ["#AAA","#BBB","#111","#000","#555"]},
        { colors: ["#AAA","#BBB","#111","#000","#555"]},
        { colors: ["#AAA","#BBB","#111","#000","#555"]},
        { colors: ["#AAA","#BBB","#111","#000","#555"]},
        { colors: ["#AAA","#BBB","#111","#000","#555"]},
        { colors: ["#AAA","#BBB","#111","#000","#555"]},
        { colors: ["#AAA","#BBB","#111","#000","#555"]},
        { colors: ["#AAA","#BBB","#111","#000","#555"]},
        { colors: ["#AAA","#BBB","#111","#000","#555"]},
        { colors: ["#AAA","#BBB","#111","#000","#555"]},
        { colors: ["#AAA","#BBB","#111","#000","#555"]},
        { colors: ["#AAA","#BBB","#111","#000","#555"]},
        { colors: ["#AAA","#BBB","#111","#000","#555"]},
        { colors: ["#AAA","#BBB","#111","#000","#555"]},
        { colors: ["#AAA","#BBB","#111","#000","#555"]},
        { colors: ["#AAA","#BBB","#111","#000","#555"]},
        { colors: ["#AAA","#BBB","#111","#000","#555"]},
        { colors: ["#AAA","#BBB","#111","#000","#555"]},
        { colors: ["#AAA","#BBB","#111","#000","#555"]},
        { colors: ["#AAA","#BBB","#111","#000","#555"]},
        { colors: ["#AAA","#BBB","#111","#000","#555"]},
        { colors: ["#AAA","#BBB","#111","#000","#555"]},

    ];

    return ( 
        <div className="dark:bg-gray-900 flex flex-wrap justify-start gap-3 m-3 items-start h-fit">
            {palettesColors.map((palette, index) => (
                <Palette key={index} palette={palette} />
            ))}
        </div>
    );
}

export default SearchPage;
