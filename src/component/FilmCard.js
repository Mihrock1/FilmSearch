import React from 'react';

const FilmCard = ({ movie: { imdbID, Year, Poster, Title } }) => {
    return (
        <div key={imdbID}
            className="flex flex-1 flex-col justify-between bg-white border border-gray-300 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div>
                <p className="text-center">{Year}</p>
            </div>

            <div>
                <img className="object-cover w-full rounded-t-lg" src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} alt={Title} />
            </div>

            <div className="">
                <h3 className="text-center">{Title}</h3>
            </div>
        </div>
    );
}

export default FilmCard;