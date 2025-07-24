import {cn} from "@/libs/utils.js"
import { useState } from "react";

const skills = [
    {name: "HTML/CSS", category: "frontend"},
    {name: "JavaScript", category: "frontend"},
    {name: "TypeScript", category: "frontend"},
    {name: "Tailwind CSS", category: "frontend"},
    {name: "Next.js", category: "frontend"},

    {name: "Python", category: "backend"},
    {name: "Java", category: "backend"},
    {name: "C++", category: "backend"},
    {name: "C", category: "backend"},
    {name: "PostgreSQL", category: "backend"},
    {name: "Firebase", category: "backend"},
    {name: "Node.js", category: "backend"},

    {name: "DeBERTa v3", category: "ML/NLP"},
    {name: "Transformers", category: "ML/NLP"},
    {name: "Scikit-learn", category: "ML/NLP"},
    {name: "TensorFlow", category: "ML/NLP"},
    {name: "Torch", category: "ML/NLP"},
    {name: "RAG", category: "ML/NLP"},
    {name: "LlaMaScout API", category: "ML/NLP"},

    {name: "Git/Github", category: "tools"},
    {name: "Docker", category: "tools"},
    {name: "VS Code", category: "tools"},
];

const categories = ["all", "frontend", "backend", "tools"]

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all")

    const filteredSkills = skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory);

    return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                My <span className="text-primary"> Skills</span>
            </h2>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category,key) => (
                    <button 
                    key={key}
                    onClick={() => setActiveCategory(category)} 
                    className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                        activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bd-secondary"
                    )}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSkills.map((skill, key) => (
                    <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                        <div className="text-center mb-4">
                            <h3 className="font-semibold text-lg"> 
                                {skill.name}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
    );
};