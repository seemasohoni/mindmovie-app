"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Progress } from "@/components/ui/progress";
import { Play, Upload, Music, Sparkles, Wand2, ChevronRight, Plus, Image as ImageIcon, Film, Mic, LayoutGrid } from "lucide-react";

const TemplateCard = ({ title, subtitle }:{title:string; subtitle:string}) => (
  <Card className="w-64 shrink-0 hover:shadow-xl transition-shadow cursor-pointer">
    <CardHeader>
      <div className="aspect-[16/9] w-full rounded-xl bg-gradient-to-br from-purple-200 to-blue-200 flex items-center justify-center">
        <Sparkles className="h-8 w-8" />
      </div>
      <CardTitle className="mt-3 text-lg">{title}</CardTitle>
      <CardDescription>{subtitle}</CardDescription>
    </CardHeader>
  </Card>
);

const Step = ({ n, title, desc, icon: Icon }:{n:number; title:string; desc:string; icon:any}) => (
  <Card className="flex-1">
    <CardHeader className="flex flex-row items-center gap-3">
      <Badge className="rounded-full px-3 py-1">{n}</Badge>
      <div className="flex items-center gap-2">
        <Icon className="h-5 w-5" />
        <CardTitle className="text-base">{title}</CardTitle>
      </div>
    </CardHeader>
    <CardContent className="text-sm text-muted-foreground -mt-4">{desc}</CardContent>
  </Card>
);

const Chip = ({label}:{label:string}) => (
  <Badge variant="secondary" className="cursor-pointer hover:scale-105 transition-transform">{label}</Badge>
);

const StoryboardFrame = ({label}:{label:string}) => (
  <div className="w-40 h-28 rounded-xl bg-muted flex items-center justify-center shrink-0 relative">
    <Plus className="h-6 w-6" />
    <span className="absolute bottom-2 text-xs text-muted-foreground">{label}</span>
  </div>
);

export default function MindMovieFirstPage(){
  const [intention, setIntention] = useState("");
  const [length, setLength] = useState([60]);
  const [affirmationsOn, setAffirmationsOn] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      {/* Top Nav */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-2xl bg-gradient-to-br from-fuchsia-400 to-blue-400" />
            <span className="font-semibold tracking-tight">MindMovie Studio</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
            <a className="hover:text-foreground" href="#templates">Templates</a>
            <a className="hover:text-foreground" href="#how">How it works</a>
            <a className="hover:text-foreground" href="#examples">Examples</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="ghost">Sign in</Button>
            <Button className="">New Project</Button>
          </div>
        </div>
      </header>

      {/* Hero / Quick Start */}
      <section className="mx-auto max-w-7xl px-4 pt-10 pb-6 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <motion.h1
            initial={{opacity:0, y:8}}
            animate={{opacity:1, y:0}}
            transition={{duration:0.5}}
            className="text-3xl md:text-5xl font-bold tracking-tight"
          >
            Turn your goals into a <span className="bg-gradient-to-r from-fuchsia-500 to-blue-600 bg-clip-text text-transparent">Mind Movie</span>
          </motion.h1>
          <p className="mt-4 text-muted-foreground text-lg">
            Craft a short, cinematic visualization with images, clips, affirmations, and music to prime your subconscious daily.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Button size="lg" className="h-12 text-base">
              <Wand2 className="mr-2 h-5 w-5"/> Start from a template
            </Button>
            <Button size="lg" variant="outline" className="h-12 text-base">
              <LayoutGrid className="mr-2 h-5 w-5"/> Start blank
            </Button>
          </div>

          <div className="mt-6 flex flex-wrap gap-2 items-center text-sm">
            <span className="text-muted-foreground">Popular vibes:</span>
            {['Abundance','Confidence','Focus','Love','Wellness','Career'].map(v=> <Chip key={v} label={v}/>) }
          </div>
        </div>

        {/* Quick Config */}
        <Card className="p-2">
          <CardHeader>
            <CardTitle className="text-lg">Quick setup</CardTitle>
            <CardDescription>Answer a few prompts to pre-fill your project (you can change these later).</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium">Your intention</label>
              <Input placeholder="e.g., Land my Staff Engineer role by Dec 2025" value={intention} onChange={e=>setIntention(e.target.value)} />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-sm font-medium">Target length (sec)</label>
                <Slider value={length} onValueChange={setLength} min={20} max={180} step={5} className="mt-2"/>
                <div className="text-xs text-muted-foreground mt-1">{length[0]} seconds</div>
              </div>
              <div className="flex items-center justify-between border rounded-xl p-3">
                <div>
                  <div className="text-sm font-medium">Affirmations overlay</div>
                  <div className="text-xs text-muted-foreground">Show positive statements on screen</div>
                </div>
                <Switch checked={affirmationsOn} onCheckedChange={setAffirmationsOn} />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <Button variant="outline" className="justify-start"><Upload className="mr-2 h-4 w-4"/> Import media</Button>
              <Button variant="outline" className="justify-start"><ImageIcon className="mr-2 h-4 w-4"/> Stock images</Button>
              <Button variant="outline" className="justify-start"><Music className="mr-2 h-4 w-4"/> Pick soundtrack</Button>
            </div>
          </CardContent>
          <CardFooter className="justify-between">
            <div className="text-xs text-muted-foreground">You can tweak everything in the editor.</div>
            <Button>Continue <ChevronRight className="ml-1 h-4 w-4"/></Button>
          </CardFooter>
        </Card>
      </section>

      {/* How it works */}
      <section id="how" className="mx-auto max-w-7xl px-4 py-8">
        <div className="grid md:grid-cols-3 gap-4">
          <Step n={1} title="Set intention" desc="Clarify your goal, choose a vibe, and pick duration." icon={Sparkles} />
          <Step n={2} title="Assemble scenes" desc="Drag images & clips onto a storyboard and add affirmations." icon={Film} />
          <Step n={3} title="Add audio & export" desc="Choose music or record your voiceover. Render and share." icon={Mic} />
        </div>
      </section>

      {/* Templates */}
      <section id="templates" className="mx-auto max-w-7xl px-4 py-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Start with a template</h2>
          <Button variant="ghost">See all</Button>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-2">
          {[
            {title:'Abundance Booster', subtitle:'Money mindset + gratitude'},
            {title:'Confidence Sprint', subtitle:'Self-belief & presence'},
            {title:'Focus Deep Dive', subtitle:'Flow state priming'},
            {title:'Wellness Reset', subtitle:'Energy & balance'},
            {title:'Love Magnet', subtitle:'Connection & warmth'},
          ].map(t => <TemplateCard key={t.title} title={t.title} subtitle={t.subtitle} />)}
        </div>
      </section>

      {/* Storyboard Empty State */}
      <section className="mx-auto max-w-7xl px-4 py-10">
        <Card>
          <CardHeader>
            <CardTitle>Storyboard (preview)</CardTitle>
            <CardDescription>Your scenes will appear here. Add 6–12 frames for a tight 60–90 second cut.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-3 overflow-x-auto pb-2">
              {['Intro','Goal','Identity','Process','Emotions','Future You','Gratitude','Outro'].map((l) => (
                <StoryboardFrame key={l} label={l} />
              ))}
            </div>
          </CardContent>
          <CardFooter className="justify-between">
            <div className="w-1/2 hidden md:block">
              <Progress value={32} />
              <p className="text-xs text-muted-foreground mt-2">Setup progress (optional)</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline"><Upload className="mr-2 h-4 w-4"/> Add media</Button>
              <Button><Play className="mr-2 h-4 w-4"/> Preview</Button>
            </div>
          </CardFooter>
        </Card>
      </section>

      {/* Footer */}
      <footer className="mx-auto max-w-7xl px-4 py-10 text-sm text-muted-foreground">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} MindMovie Studio</p>
          <div className="flex gap-6">
            <a href="#">Docs</a>
            <a href="#">Community</a>
            <a href="#">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
