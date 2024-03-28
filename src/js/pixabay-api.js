function getPicture(query) {
    const keyAPI = "43059548-3adc942b003e7790296d060a7";
    const BASE_URL ="https://pixabay.com/api/" 
    const searchParams = new URLSearchParams({
        key: keyAPI,
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
        per_page: 40.
    })
    return fetch(`${BASE_URL}?${searchParams}`)
        .then(res => {
            if (!res.ok) {
                throw new Error("error");   
            }
            return res.json();
        })
}
getPicture()