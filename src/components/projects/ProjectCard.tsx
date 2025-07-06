'use client';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { type Project } from '@/types/project';
import { Link } from 'next-view-transitions';
import Image from 'next/image';
import React, { useState } from 'react';

import ArrowRight from '../svgs/ArrowRight';
import CheckCircle from '../svgs/CheckCircle';
import Github from '../svgs/Github';
import PlayCircle from '../svgs/PlayCircle';
import Website from '../svgs/Website';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);

  return (
    <Card className="group h-full w-full overflow-hidden transition-all p-0 border-gray-100 dark:border-gray-800 shadow-none rounded-lg bg-white dark:bg-gray-900">
      <CardHeader className="p-0">
        <div className="group relative aspect-video overflow-hidden rounded-t-lg bg-gray-100 dark:bg-gray-800">
          <Image
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02] rounded-t-lg"
            src={project.image}
            alt={project.title}
            width={1920}
            height={1080}
            priority
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = '/meta/projects.png'; // Fallback to projects meta image
            }}
          />
          {project.video && (
            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
              <DialogTrigger asChild>
                <div className="absolute inset-0 flex cursor-pointer items-center justify-center bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100 hover:backdrop-blur-xs">
                  <button className="flex size-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-colors duration-200 group-hover:cursor-pointer hover:bg-white/30">
                    <PlayCircle />
                  </button>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl w-full p-0 border-0">
                <div className="aspect-video w-full">
                  <video
                    className="h-full w-full object-cover rounded-lg"
                    src={project.video}
                    autoPlay
                    loop
                    controls
                  />
                </div>
                <DialogTitle className="sr-only">{project.title}</DialogTitle>
              </DialogContent>
            </Dialog>
          )}
        </div>
      </CardHeader>

      <CardContent className="px-6">
        <div className="space-y-4">
          {/* Project Header */}
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-xl font-semibold leading-tight group-hover:text-primary">
                {project.title}
              </h3>
              <p className="text-secondary mt-2">{project.description}</p>
            </div>
            <div className="flex items-center gap-2">
              <Tooltip>
                <TooltipTrigger>
                  <Link
                    className="text-secondary flex size-6 items-center justify-center hover:text-primary transition-colors"
                    href={project.link}
                    target="_blank"
                  >
                    <Website />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>View Website</p>
                </TooltipContent>
              </Tooltip>
              {project.github && (
                <Tooltip>
                  <TooltipTrigger>
                    <Link
                      className="text-secondary flex size-6 items-center justify-center hover:text-primary transition-colors"
                      href={project.github}
                      target="_blank"
                    >
                      <Github />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>View GitHub</p>
                  </TooltipContent>
                </Tooltip>
              )}
            </div>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="text-sm font-medium mb-2 text-secondary">
              Technologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((technology, index) => (
                <Tooltip key={index}>
                  <TooltipTrigger>
                    <div className="size-6 hover:scale-120 transition-all duration-300 hover:cursor-pointer">
                      {technology.icon}
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{technology.name}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </div>
        </div>
      </CardContent>

      {project.details && (
        <CardFooter className="p-6 pt-0 flex justify-between">
          <div
            className={`flex items-center gap-1 rounded-md px-2 py-1 text-xs ${
              project.isWorking
                ? 'border-green-300 bg-green-500/10'
                : 'border-blue-300 bg-blue-500/10'
            }`}
          >
            {project.isWorking ? (
              <>
                <div className="size-2 rounded-full bg-green-500 animate-pulse" />
                All Systems Operational
              </>
            ) : (
              <>
                <CheckCircle className="size-3 text-blue-500" />
                Completed
              </>
            )}
          </div>
          <Link
            href={project.projectDetailsPageSlug}
            className="text-secondary flex items-center gap-2 text-sm hover:underline underline-offset-4 hover:text-primary transition-colors"
          >
            View Details <ArrowRight className="size-4" />
          </Link>
        </CardFooter>
      )}
    </Card>
  );
}
