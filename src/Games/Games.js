import React from "react";
import { createRoot } from "react-dom/client";
import GameCard from "./GameCard";

const games = document.querySelector('#games');
const root = createRoot(games);
root.render(<Games />);


export default function Games() {

    return (
        <div class="game-cards">
            <GameCard name="League of Legends" image="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/30549390-4919-434e-8348-5e67ea4b73eb/d9te3a4-4d38bf26-5627-4ed0-b1a3-1977c89c28a1.jpg/v1/fill/w_1024,h_1449,q_75,strp/league_of_legends_poster_design_by_yuto_chan_d9te3a4-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTQ0OSIsInBhdGgiOiJcL2ZcLzMwNTQ5MzkwLTQ5MTktNDM0ZS04MzQ4LTVlNjdlYTRiNzNlYlwvZDl0ZTNhNC00ZDM4YmYyNi01NjI3LTRlZDAtYjFhMy0xOTc3Yzg5YzI4YTEuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.Mivw5_kN1HvV4QHGdctqr5OP1VOznno-LXGURC3mdXs" />
            <GameCard name="Overwatch" image="https://i5.walmartimages.com/asr/ef508770-a89f-45bf-8c4d-4a9b226e789c.88ac656b3d0bd089b2fb2cb686ed9d66.jpeg" />
            <GameCard name="God of War" image="https://cdn.europosters.eu/image/750/posters/playstation-god-of-war-i116582.jpg" />
            <GameCard name="Halo" image="https://411mania.com/wp-content/uploads/2022/03/HALO-Poster-645x370.jpg" />
            <GameCard name="Fortnite" image="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgIUAPaFOOafcxO_X3-krOE2j84EwlRBx9RgI-fJMdGdbLEMyuNgAQpsYQZKnZHxza4kJ5nxoe7iDLXaccNW7NffMAD-RMfZw-EjdmyQnstPagVN_k-kc4MTGhFi-S7ry9jVH5PGzooTwKF6mvLd9lfXyBGur44vsQwaulcr4_GVhyG1aW4ttDly3ba/s1920/fortnite-free-printable-posters-001.jpg" />
            <GameCard name="Mass Effect" image="https://preview.redd.it/nq226pqvvpg61.png?auto=webp&s=c7797ef32330979a0db978fed2c93cb35e4d58b8" />

        </div>
    )
}