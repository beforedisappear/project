"use client";

import { Button } from "@/ui/Button/Button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/ui/Dialog/Dialog";

import type { ReactNode } from "react";

interface IProps {
  videoId: string;
  children: ReactNode;
}

export function VideoModal({ videoId, children }: IProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent
        className="w-full p-0 border-0 max-w-[1400px] h-full max-h-[90%] 
        sm:max-w-[85%]"
        hideCloseBtn
      >
        <DialogHeader className="hidden">
          <DialogTitle>Youtube video</DialogTitle>
        </DialogHeader>

        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </DialogContent>
    </Dialog>
  );
}
