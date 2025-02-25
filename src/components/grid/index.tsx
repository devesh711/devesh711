"use client";

import { useEffect, useState } from "react";
import cn from "classnames";
import styles from "./grid.module.scss";
import {
  WidthProvider,
	ResponsiveGridLayout as Responsive,
} from "react-grid-layout-next";
import { heights, layouts } from "@/data";
import ThemeToggle from "../theme-toggle";
import BlurFade from "../magic-ui/blur-fade";
import {
	TextMarqueeCard,
	MyTechCard,
	JobsCard,
	AboutCard,
	ResumeCard,
	IconCard,
	ProjectCard,
	SkillChartCard
} from "@/components/cards";

const ResponsiveGridLayout = WidthProvider(Responsive);

const Grid = () => {
	const [height, setHeight] = useState(280);
	const [isMounted, setMounted] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setMounted(true);
		}, 500);
	}, []);

	return (
		<div className={styles.container}>
			<ResponsiveGridLayout
				useCSSTransforms
				className={styles.layout}
				layouts={layouts.all}
				breakpoints={{
					lg: 1199,
					md: 799,
					sm: 374,
				}}
				cols={{
					lg: 12,
					md: 10,
					sm: 4,
				}}
				isDraggable={typeof window !== "undefined" && window.innerWidth >= 1200}
				rowHeight={height}
				onBreakpointChange={(breakpoint: any) => {
					setHeight(heights[breakpoint])
				}}
				margin={[16, 16]}
			>
				<div
					key="bio"
					className={cn(styles.itemGrab, styles.item)}
					style={{
						transitionDuration: isMounted ? "500ms" : "0ms",
						height: "100%"
					}}>
					<BlurFade delay={0.01}>
						<AboutCard />
					</BlurFade>
				</div>
        <div
					key="theme-toggle"
					className={cn(styles.itemGrab, styles.item)}
					style={{
						transitionDuration: isMounted ? "500ms" : "0ms"
					}}>
            <div className="flex flex-col-reverse sm:flex-col gap-3 h-full">
							<BlurFade delay={0.1}>
								<ResumeCard />
							</BlurFade>
							<BlurFade delay={0.12}>
								<ThemeToggle />
							</BlurFade>
            </div>
				</div>
				<div
					key="skill"
					className={cn(styles.itemGrab, styles.item)}
					style={{
						transitionDuration: isMounted ? "500ms" : "0ms"
					}}
				>
					<BlurFade delay={0.08}>
						<SkillChartCard />
					</BlurFade>
				</div>
        <div
					key="text-marquee"
					className={cn(styles.itemGrab, styles.item)}
					style={{
						transitionDuration: isMounted ? "500ms" : "0ms"
					}}
				>
					<BlurFade delay={0.04}>
						<TextMarqueeCard />
					</BlurFade>
				</div>
        <div
          key="linkedin"
          className={cn(styles.itemGrab, styles.item)}
          style={{
            transitionDuration: isMounted ? "500ms" : "0ms"
          }}
        >
					<BlurFade delay={0.24}>
						<IconCard title="Linkedin" link="https://www.linkedin.com/in/PatelDevesh/" />
					</BlurFade>
        </div>
        <div
          key="github"
          className={cn(styles.itemGrab, styles.item)}
          style={{
            transitionDuration: isMounted ? "500ms" : "0ms"
          }}
        >
					<BlurFade delay={0.26}>
						<IconCard title="Github" link="https://github.com/devesh711" />
					</BlurFade>
        </div>
        <div
          key="codepen"
          className={cn(styles.itemGrab, styles.item)}
          style={{
            transitionDuration: isMounted ? "500ms" : "0ms"
          }}
        >
					<BlurFade delay={0.28}>
						<IconCard title="Codepen" link="https://medium.com/@devesh711" />
					</BlurFade>
        </div>
        <div
          key="email"
          className={cn(styles.itemGrab, styles.item)}
          style={{
            transitionDuration: isMounted ? "500ms" : "0ms"
          }}
        >
					<BlurFade delay={0.30}>
						<IconCard title="Email" link="mailto:pdevesh699+work@gmail.com" />
					</BlurFade>
        </div>
        <div
					key="my-stack"
					className={cn(styles.itemGrab, styles.item)}
					style={{
						transitionDuration: isMounted ? "500ms" : "0ms"
					}}
        >
					<BlurFade delay={0.35}>
						<MyTechCard />
					</BlurFade>
				</div>
        <div
					key="jobs"
					className={cn(styles.itemGrab, styles.item)}
					style={{
						transitionDuration: isMounted ? "700ms" : "0ms"
					}}
        >
					<BlurFade delay={0.40}>
						<JobsCard />
					</BlurFade>
				</div>
				<div
					key="neurogen"
					className={cn(styles.itemGrab, styles.item)}
					style={{
						transitionDuration: isMounted ? "700ms" : "0ms"
					}}
        >
					<BlurFade delay={0.50}>
					<ProjectCard 
						    projectImage="/projects/neurogen.png"
							projectAlt="Neurogen"
							companyLogo="/companies/logo_neurogen.png"
							companyAlt="Neurogen logo"
							companyName="Neurogen"
							projectTitle="Neuorgen"
							projectLink="https://neurogen.app/portfolio"
							badges={["Backend + Deployment", "React", "Django", "REST API", "Postgres","AWS"]}
						/>
					</BlurFade>
				</div>
				<div
					key="Simulation-Request-Portal"
					className={cn(styles.itemGrab, styles.item)}
					style={{
						transitionDuration: isMounted ? "700ms" : "0ms"
					}}
        >
					<BlurFade delay={0.55}>
					<ProjectCard 
						      projectImage="/projects/SRP.svg"
							  projectAlt="Simulation Request Portal"
							  companyLogo="/companies/apollo_solo_logo.png"
							  companyAlt="Apollo logo"
							  companyName="Apollo Tyres"
							  projectTitle="Simulation Request Portal"
							  projectLink="/"
							  badges={["FullStack", "Django", "Celery", "Postgres"]}
					/>
					</BlurFade>
				</div>
				<div
					key="health-insight"
					className={cn(styles.itemGrab, styles.item)}
					style={{
						transitionDuration: isMounted ? "700ms" : "0ms"
					}}
        >
					<BlurFade delay={0.60}>
					<ProjectCard 
						    projectImage="/projects/RetroRevive.png"
							projectAlt="Health Insight"
							companyLogo="/companies/Noirinsight.jpeg"
							companyAlt="Noirinsight logo"
							companyName="NoirInsight"
							projectTitle="Health Insight"
							projectLink="https://github.com/NOIRINSIGHT/Health-Insight"
							badges={["Frontend + Backend", "svelte", "OpenAi", "Google TTS"]}
						/>
					</BlurFade>
				</div>
				<div
					key="retro-revive"
					className={cn(styles.itemGrab, styles.item)}
					style={{
						transitionDuration: isMounted ? "700ms" : "0ms"
					}}
        >
					<BlurFade delay={0.60}>
					<ProjectCard 
						    projectImage="/projects/RetroRevive.png"
							projectAlt="Retro Revive"
							companyLogo="/companies/Noirinsight.jpeg"
							companyAlt="Noirinsight logo"
							companyName="NoirInsight"
							projectTitle="Retro Revive"
							projectLink="https://github.com/NOIRINSIGHT/Retro-Revive"
							badges={["Frontend + Backend", "Django", "opencv", "AWS S3"]}
						/>
					</BlurFade>
				</div>
				{/* <div
					key="alliance-landing"
					className={cn(styles.itemGrab, styles.item)}
					style={{
						transitionDuration: isMounted ? "700ms" : "0ms"
					}}
        >
					<BlurFade delay={0.70}>
						<ProjectCard 
						    projectImage="/projects/Alliance-money.png"
							projectAlt="Alliance landing page example"
							companyLogo="/companies/01_Terra_color.png"
							companyAlt="TFL logo"
							companyName="Terraform Labs"
							projectTitle="Alliance Landing"
							projectLink="https://alliance.money/"
							badges={["Frontend + Design", "React", "Typescript", "SCSS"]}
						/>
					</BlurFade>
				</div>
				<div
					key="developer-landing"
					className={cn(styles.itemGrab, styles.item)}
					style={{
						transitionDuration: isMounted ? "700ms" : "0ms"
					}}
        >
					<BlurFade delay={0.75}>
					<ProjectCard 
						      projectImage="/projects/Alliance-money.png"
							  projectAlt="Alliance landing page example"
							  companyLogo="/companies/01_Terra_color.png"
							  companyAlt="TFL logo"
							  companyName="Terraform Labs"
							  projectTitle="Alliance Landing"
							  projectLink="https://alliance.money/"
							  badges={["Frontend + Design", "React", "Typescript", "SCSS"]}
						/> 
					</BlurFade>
				</div> */}
			</ResponsiveGridLayout>
		</div>
	);
};

export default Grid;
