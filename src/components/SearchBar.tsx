import { useState } from "react";
import { MapPin, Calendar, Users, Search, Sparkles } from "lucide-react";

const SearchBar = () => {
  const [location, setLocation] = useState("Marrakech");
  const [eventType, setEventType] = useState("Mariage");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState(50);

  return (
    <section className="bg-lightturquoise xl:pt-17.5 pt-12.5 px-5">
      <div className="max-w-250 mx-auto lg:h-25 p-1.75 bg-paleaqua lg:rounded-25xl rounded-2xl">
        <div className="bg-white rounded-2xl lg:rounded-full p-4 lg:p-3 lg:pl-10">
          <form className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6">
            {/* Location */}
            <div className="w-full lg:w-auto lg:flex-1">
              <label className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                <MapPin className="h-4 w-4 text-primary" />
                Localisation
              </label>
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full bg-transparent text-xl font-bold text-primary outline-none cursor-pointer"
              >
                <option value="Marrakech">Marrakech</option>
                <option value="Casablanca">Casablanca</option>
                <option value="Rabat">Rabat</option>
                <option value="Fès">Fès</option>
                <option value="Agadir">Agadir</option>
              </select>
            </div>

            {/* Divider */}
            <div className="hidden lg:block w-px h-12 bg-[#DBEEEE]" />

            {/* Event Type */}
            <div className="w-full lg:w-auto lg:flex-1">
              <label className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                <Sparkles className="h-4 w-4 text-primary" />
                Type d'événement
              </label>
              <select
                value={eventType}
                onChange={(e) => setEventType(e.target.value)}
                className="w-full bg-transparent text-xl font-bold text-primary outline-none cursor-pointer"
              >
                <option value="Mariage">Mariage</option>
                <option value="Corporate">Corporate</option>
                <option value="Anniversaire">Anniversaire</option>
                <option value="Conférence">Conférence</option>
              </select>
            </div>

            {/* Divider */}
            <div className="hidden lg:block w-px h-12 bg-[#DBEEEE]" />

            {/* Date */}
            <div className="w-full lg:w-auto lg:flex-1">
              <label className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                <Calendar className="h-4 w-4 text-primary" />
                Date
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                placeholder="Choisir une date"
                className="w-full bg-transparent text-xl font-bold text-primary outline-none"
              />
            </div>

            {/* Divider */}
            <div className="hidden lg:block w-px h-12 bg-[#DBEEEE]" />

            {/* Guests */}
            <div className="w-full lg:w-auto lg:flex-1">
              <label className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                <Users className="h-4 w-4 text-primary" />
                Invités
              </label>
              <div className="flex items-center gap-3">
                <input
                  type="number"
                  min="1"
                  value={guests}
                  onChange={(e) => setGuests(parseInt(e.target.value) || 1)}
                  className="w-20 bg-transparent text-xl font-bold text-primary outline-none"
                />
                <button
                  type="button"
                  onClick={() => setGuests(Math.max(1, guests - 10))}
                  className="h-6 w-6 flex items-center justify-center text-muted-foreground hover:text-primary"
                >
                  −
                </button>
                <button
                  type="button"
                  onClick={() => setGuests(guests + 10)}
                  className="h-6 w-6 flex items-center justify-center text-muted-foreground hover:text-primary"
                >
                  +
                </button>
              </div>
            </div>

            {/* Search Button */}
            <button
              type="submit"
              className="w-full lg:w-auto bg-primary hover:bg-primary/90 text-white rounded-full h-14 px-6 lg:h-14 lg:w-14 flex items-center justify-center transition-all duration-300 hover:scale-105"
            >
              <Search className="h-6 w-6" />
              <span className="ml-2 lg:hidden">Rechercher</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SearchBar;
