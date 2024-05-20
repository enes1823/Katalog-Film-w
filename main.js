let selectedMovieIndex = -1;
        const movies = [];

        function addMovie() {
            const title = document.getElementById("title").value;
            const author = document.getElementById("author").value;
            const year = document.getElementById("year").value;
            const category = document.getElementById("category").value;

            const movie = {
                title: title,
                author: author,
                year: year,
                category: category
            };

            if (selectedMovieIndex === -1) {
                movies.push(movie);
            } else {
                movies[selectedMovieIndex] = movie;
            }

            render();
            cleanForm();
            hideDeleteButton();
            selectedMovieIndex = -1;
        }

        function render() {
            const element = document.getElementById("videos");
            element.innerHTML = "";
            for (let i = 0; i < movies.length; i++) {

                const movieDiv = document.createElement("div");
                movieDiv.className = "movie_added";
                movieDiv.id = "movie_added" + i;
                movieDiv.onclick = function() { editMovie(i); };

                const movieDetails_t = document.createElement("p");
                const movieDetails_a = document.createElement("p");
                const movieDetails_y = document.createElement("p");
                const movieDetails_c = document.createElement("p");

                const movieTitle = document.createTextNode("Tytuł: " + movies[i].title);
                const movieAuthor = document.createTextNode("Reżyser: " + movies[i].author);
                const movieYear = document.createTextNode("Rok Produkcji: " + movies[i].year);
                const movieCategory = document.createTextNode("Kategoria: " + movies[i].category);

                movieDetails_t.appendChild(movieTitle);
                movieDetails_a.appendChild(movieAuthor);
                movieDetails_y.appendChild(movieYear);
                movieDetails_c.appendChild(movieCategory);

                movieDiv.appendChild(movieDetails_t);
                movieDiv.appendChild(movieDetails_a);
                movieDiv.appendChild(movieDetails_y);
                movieDiv.appendChild(movieDetails_c);

                element.appendChild(movieDiv);
            }
        }

        function cleanForm() {
            document.getElementById("title").value = "";
            document.getElementById("author").value = "";
            document.getElementById("year").value = "";
            document.getElementById("category").value = "";
        }

        function showDeleteButton() {
            document.getElementById("delete").style.display = "inline";
        }

        function hideDeleteButton() {
            document.getElementById("delete").style.display = "none";
        }

        function editMovie(index) {
            selectedMovieIndex = index;
            const movie = movies[index];
            document.getElementById("title").value = movie.title;
            document.getElementById("author").value = movie.author;
            document.getElementById("year").value = movie.year;
            document.getElementById("category").value = movie.category;
            showDeleteButton();
            const movieDiv = document.getElementById("movie_added" + index);
            movieDiv.style.backgroundColor = movieDiv.style.backgroundColor === "lightgray" ? "white" : "lightgray";
        }

        function deleteMovie() {
            if (selectedMovieIndex !== -1) {
                movies.splice(selectedMovieIndex, 1);
                render();
                cleanForm();
                hideDeleteButton();
                selectedMovieIndex = -1;
            }
        }

        function saveChanges() {
            if (selectedMovieIndex !== -1) {
                const movie = movies[selectedMovieIndex];
                movie.title = document.getElementById("title").value;
                movie.author = document.getElementById("author").value;
                movie.year = document.getElementById("year").value;
                movie.category = document.getElementById("category").value;

                render();
                cleanForm();
                hideDeleteButton();
                selectedMovieIndex = -1;
            }
        }

        function cancelChanges() {
            cleanForm();
            hideDeleteButton();
            selectedMovieIndex = -1;
        }