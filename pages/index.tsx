import Head from "next/head";
import Link from "next/link";
import { GetStaticProps } from "next";
import About from "../components/About";
import Hero from "../components/Hero";
import Header from "../components/Header";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";
import WorkExperience from "../components/WorkExperience";
import { ArrowUpCircleIcon } from "@heroicons/react/24/solid";
import { PageInfo, Experience, Skill, Project, Social } from "../typing";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchExperiences } from "../utils/fetchExperience";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchSocials } from "../utils/fetchSocials";
import dynamic from "next/dynamic";

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

const Home = ({ pageInfo, experiences, projects, skills, socials }: Props) => {
  return (
    <div
      className="h-screen bg-[rgb(36,36,36)] text-white
     snap-y snap-mandatory overflow-y-scroll overflow-x-scroll
     z-0 scrollbar scrollbar-thumb-[#F7AB0A]/80 scrollbar-track-gray-400/20"
    >
      <Head>
        <title>{pageInfo?.name} - Portfolio</title>
      </Head>

      <Header socials={socials} />

      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>

      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>

      <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences} />
      </section>

      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>

      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>

      <section id="contact" className="snap-start">
        <ContactMe pageInfo={pageInfo} />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <ArrowUpCircleIcon className="h-10 w-10 rounded-full " />
          </div>
        </footer>
      </Link>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Home), { ssr: false });

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
    revalidate: 10,
  };
};
