import FeaturedRepcipes from "./FeaturedRepcipes";
import OutstandingFood from "./OutstandingFood";
import TopFood from "./TopFood";


export default function Home() {
    return (
        <div className="Home">
            <>
                <OutstandingFood />
                <TopFood/>
                <FeaturedRepcipes/>
            </>
        </div>
    );
}


