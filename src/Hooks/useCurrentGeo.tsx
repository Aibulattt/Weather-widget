import { useEffect, useState } from "react"

const apiKey = 'AIzaSyBPWhIMbX9ZgMi6t58kiGBND5qa_3txyY4'


export const useCurrentGeo = (): string => {
    const [location, setLocation] = useState<string>('')

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                let lat = Number(position.coords.latitude.toFixed(2))
                let lng = Number(position.coords.longitude.toFixed(2))

                fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${apiKey}&lang=en`)
                    .then(res => res.json())
                    .then(data => {
                        const city = data.results[0].address_components[2].long_name
                        setLocation(city)
                    })
            })
        } else {
            console.log('Error')
        }
    }, [])
    
    return location
}