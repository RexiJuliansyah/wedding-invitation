import { useWishes } from '../hooks/useWishes';

export default function WishesSection() {
  const { wishes } = useWishes();

  return (
    <section className="py-24 px-6 md:px-12 max-w-4xl mx-auto" id="wishes">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-serif text-brown-dark mb-2">Doa & Harapan</h2>
        <p className="text-brown-dark/70 text-sm">Pesan manis dari orang-orang tersayang</p>
      </div>

      <div className="bg-cream-light/60 backdrop-blur-sm rounded-3xl p-6 shadow-inner max-h-[500px] overflow-y-auto scrollbar-thin scrollbar-thumb-brown-soft scrollbar-track-transparent">
        <div className="space-y-4">
          {wishes.map((wish) => (
            <div key={wish.id} className="bg-white/80 p-5 rounded-2xl shadow-sm border border-white/50">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="font-bold text-brown-dark">{wish.name}</h4>
                  <span className={`text-xs px-2 py-1 rounded-full mt-1 inline-block ${wish.attendance === 'Hadir' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {wish.attendance}
                  </span>
                </div>
              </div>
              <p className="text-brown-dark/80 text-sm whitespace-pre-wrap">{wish.message}</p>
            </div>
          ))}

          {wishes.length === 0 && (
            <p className="text-center text-brown-soft py-8 italic">Belum ada pesan. Jadilah yang pertama memberikan doa!</p>
          )}
        </div>
      </div>
    </section>
  );
}
