import { FileIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background text-center">
      <div className="mx-auto flex max-w-[1024px] flex-col items-center justify-center text-center">
        <div className="mb-4 rounded-lg border p-4 dark:border-muted">
          <FileIcon className="h-12 w-12 text-muted-foreground" />
        </div>
        <h1 className="mb-2 text-4xl font-bold tracking-tight">
          404: The page you are looking for isn&apos;t here
        </h1>
        <p className="mb-8 text-muted-foreground">
          You either tried some shady route or you came here by mistake.
          Whichever it is, try using the navigation.
        </p>
        <Button
          onClick={() => window.history.back()}
          className="bg-[#7C3AED] hover:bg-[#7C3AED]/90"
        >
          Back to home
        </Button>
      </div>
    </div>
  );
}
