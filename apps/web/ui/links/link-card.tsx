import { CardList, useMediaQuery } from "@dub/ui";
import { useLinkBuilder } from "../modals/link-builder";
import { LinkDetailsColumn } from "./link-details-column";
import { LinkTitleColumn } from "./link-title-column";
import { ResponseLink } from "./links-container";

export function LinkCard({ link }: { link: ResponseLink }) {
  const { isMobile } = useMediaQuery();

  const { setShowLinkBuilder, LinkBuilder } = useLinkBuilder({
    props: link,
  });

  return (
    <>
      <LinkBuilder />
      <CardList.Card
        key={link.id}
        onClick={isMobile ? undefined : () => setShowLinkBuilder(true)}
        innerClassName="flex items-center gap-5 sm:gap-8 md:gap-12 text-sm"
      >
        <div className="min-w-0 grow">
          <LinkTitleColumn link={link} />
        </div>
        <LinkDetailsColumn link={link} />
      </CardList.Card>
    </>
  );
}
