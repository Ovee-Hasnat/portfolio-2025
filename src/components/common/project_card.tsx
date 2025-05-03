import { Link } from "react-router-dom";

interface Project {
  title: string;
  coverImage: string;
  slug: string;
  type: string;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link to={`/case-study/${project?.slug}`} className="relative group">
      <img
        src={`/images/projects/${project?.coverImage}`}
        alt={project?.title}
        loading="lazy"
        className="w-full h-full object-cover group-hover:scale-105 an-ease duration-1000"
        width="430px"
      />

      <span className="absolute bottom-0 z-10 px-4 pb-2 pt-6  bg-gradient-to-t from-black to-transparent w-full">
        <h4 className="font-display an-ease text-white/80 group-hover:text-white group-hover:-translate-y-2 text-xl">
          {project?.title}
        </h4>
        <p className="hidden group-hover:block -mt-3">{project?.type}</p>
      </span>
    </Link>
  );
}
