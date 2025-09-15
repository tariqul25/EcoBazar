import React from 'react';

export default function Branding() {
    const brands = [
        { id: 1, name: "steps", img: "/steps.png" },
        { id: 2, name: "Mango", img: "/brand-mango.png" },
        { id: 3, name: "Food", img: "/brand-food.png" },
        { id: 4, name: "Food.com", img: "/brand-foodcom.png" },
        { id: 5, name: "Book Off", img: "/brand-bookoff.png" },
        { id: 6, name: "G Series", img: "/brand-gseries.png" },
    ];

    return (
        <section className="py-10 bg-white border-t border-b">
            
                {/* Logos */}
                <div className="flex flex-wrap justify-center items-center  gap-8 opacity-70">
                    {brands.map((brand) => (
                        <img
                            key={brand.id}
                            src={brand.img}
                            alt={brand.name}
                            className="h-8 object-contain grayscale hover:grayscale-0 transition"
                        />
                    ))}
                </div>
        </section>
    );
}
