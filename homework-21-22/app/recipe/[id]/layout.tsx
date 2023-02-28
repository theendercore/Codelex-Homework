import Link from "next/link";

export const metadata = {
  title: "Recipe",
  description: "Made by me",
};

type RecipeLayoutProps = {
  children: React.ReactNode;
  params: { id: string };
};

export default function RecipeLayout({ children, params }: RecipeLayoutProps) {
  console.log(params.id);
  return (
    <>
      <nav className="bg-slate-600 flex flex-row gap-2">

        <Link
          href={`/recipes/${Number(params.id) - 1}` }
        >
          prev recipe
        </Link>
        <Link href="/" >
          home
        </Link>
        <Link
          href={`/recipes/${Number(params.id) + 1}`}
        >
          next recipe
        </Link>
      </nav>
      {children}
    </>
  );
}
