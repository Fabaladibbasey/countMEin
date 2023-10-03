interface Props {
  text?: string;
}

function AppLoading({ text }: Props) {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-100">
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-slate-700"></div>
      </div>
      {text && <h1 className="text-slate-700 text-3xl ml-4">{text}</h1>}
    </div>
  );
}
export default AppLoading;
