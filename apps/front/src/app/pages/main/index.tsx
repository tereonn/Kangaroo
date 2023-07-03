import { SeasonDTO, SeasonService } from '../../../openapi';
import { useEffect, useState } from 'react';

export function MainPage() {
  const [season, setSeasons] = useState<SeasonDTO[]>([]);

  useEffect(() => {
    SeasonService.seasonDataControllerGetSeasons()
      .then(
        (d) => new Promise<SeasonDTO[]>((r) => setTimeout(() => r(d), 1000))
      )
      .then((d) => setSeasons(d));
  }, []);

  return (
    <div>
      {season.length === 0 ? (
        <p> no seasons yet </p>
      ) : (
        season.map((s) => (
          <div>
            Season: {s.name}, desc: {s.description}
          </div>
        ))
      )}
    </div>
  );
}
