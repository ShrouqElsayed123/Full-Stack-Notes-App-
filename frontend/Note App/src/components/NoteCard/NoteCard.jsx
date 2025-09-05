import { Pin, Edit2, Trash2 } from "lucide-react";

const randomColor = () => {
    const colors = [
        "bg-red-50",
        "bg-green-50",
        "bg-blue-50",
        "bg-yellow-50",
        "bg-purple-50",
        "bg-pink-50",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
};


const initialNotes = [
    {
        id: 1,
        title: "Practice Mindfulness Meditation",
        date: "6th Apr 2024",
        content: "In today's fast-paced world, it's easy to feel overwhelmed...",
        tags: ["Meditation", "Mindfulness"],
        pinned: false,
    },
    {
        id: 2,
        title: "Volunteer at Local Shelter",
        date: "6th Apr 2024",
        content: "Giving back to the community is important to me, so today I...",
        tags: ["Volunteer", "Community"],
        pinned: true,
    },
    {
        id: 3,
        title: "Prepare for Interview",
        date: "6th Apr 2024",
        content: "Tomorrow I have an important interview scheduled...",
        tags: ["Interview", "Preparation"],
        pinned: false,
    },
    {
        id: 4,
        title: "Prepare for Interview",
        date: "6th Apr 2024",
        content: "Tomorrow I have an important interview scheduled...",
        tags: ["Interview", "Preparation"],
        pinned: false,
    },
    {
        id: 5,
        title: "Prepare for Interview",
        date: "6th Apr 2024",
        content: "Tomorrow I have an important interview scheduled...",
        tags: ["Interview", "Preparation"],
        pinned: false,
    },
    {
        id: 6,
        title: "Prepare for Interview",
        date: "6th Apr 2024",
        content: "Tomorrow I have an important interview scheduled...",
        tags: ["Interview", "Preparation"],
        pinned: false,
    },
];
export default function NoteCard() {
    return (
        <>

            <div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-3">
                    {
                        initialNotes.map((note) => (
                            <div key={note.id}
                                className={`rounded-md shadow-sm  p-4 flex flex-col justify-between ${randomColor()}`}
                            >
                                {/* header & pin  */}
                                <div className="flex justify-between items-center">
                                    <div>
                                        <h1>{note.title}</h1>
                                        <p>{note.date}</p>
                                    </div>
                                    <button>
                                        <Pin size={16} />
                                    </button>
                                </div>

                                <div>
                                    <p>{note.content}</p>
                                </div>

                                {/* tags & actions  */}
                                {/* Tags */}
                                <div className="mt-2 flex flex-wrap gap-1">
                                    {note.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="text-xs text-mainColor bg-blue-100 px-2 py-0.5 rounded-full"
                                        >
                                            #{tag}
                                        </span>
                                    ))}
                                </div>


                                {/* Actions */}
                                <div className="flex justify-end gap-2 mt-3">
                                    <button

                                        className="text-gray-400 hover:text-gray-600"
                                    >
                                        <Edit2 size={16} />
                                    </button>
                                    <button

                                        className="text-gray-400 hover:text-red-500"
                                    >
                                        <Trash2 size={16} />
                                    </button>
                                </div>

                            </div>
                        ))
                    }

                </div>

            </div>
        </>
    )
}
