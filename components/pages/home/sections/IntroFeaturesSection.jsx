import { useMemo } from 'react';
import { Feather, GitHub, Layout, Sliders, Tool, Zap } from 'react-feather';
import Tile from '@/components/common/Tile';
import Typography from '@/components/common/Typography';
import { Grid, GridItem, Section, Stack } from '@/components/common/layout';
import { useSite } from '@/components/common/Site';

const IntroFeaturesSection = () => {
  const { breakpoint } = useSite();

  const gap = useMemo(() => breakpoint === 'xs' ? 24 : 40, [breakpoint])
  
  return (
    <Section contained gutterBottom={20} variant="secondary">
      <Grid columns={{ xs: 1, lg: 2 }} gap={{ xs: 6, lg: 12 }}>
        <GridItem>
          <Stack>
            <Zap size={gap} />
            <Typography variant="intro" gutterTop>macOS Native</Typography>
            <Typography variant="intro" style={{ opacity: .5 }}>
              Harness the full power of your Mac, something only possible with our completely native archetecture developed in Swift.
            </Typography>
          </Stack>
        </GridItem>
        <GridItem>
          <Stack>
            <Feather size={gap} />
            <Typography variant="intro" gutterTop>
              Lightweight Yet Powerful
            </Typography>
            <Typography variant="intro" style={{ opacity: .5 }}>
              Designed to be lean with limitless potential. 
            </Typography>
          </Stack>
        </GridItem>
        <GridItem>
          <Stack>
            <GitHub size={gap} />
            <Typography variant="intro" gutterTop>
              Completely Open Source
            </Typography>
            <Typography variant="intro" style={{ opacity: .5 }}>
              CodeEdit is developed for you by developers like you. Don't like something? Want a new feature? Just create an issue or submit a PR.
            </Typography>
          </Stack>
        </GridItem>
        <GridItem>
          <Stack>
            <Sliders size={gap} />
            <Typography variant="intro" gutterTop>
              Extensible & customizable
            </Typography>
            <Typography variant="intro" style={{ opacity: .5 }}>
              We aren&apos;t going to guess. Make CodeEdit your own, tailored to
              your needs.
            </Typography>
          </Stack>
        </GridItem>
        <GridItem>
          <Stack>
            <Layout size={gap} />
            <Typography variant="intro" gutterTop>
              Familiar &amp; Intuitive User Interface
            </Typography>
            <Typography variant="intro" style={{ opacity: .5 }}>
              Our user interface is designed to be familiar for ease-of-use and productivity. 
            </Typography>
          </Stack>
        </GridItem>
        <GridItem>
          <Stack>
            <Tool size={gap} />
            <Typography variant="intro" gutterTop>
              Better tools to get the job done
            </Typography>
            <Typography variant="intro" style={{ opacity: .5 }}>
              Feel connected to the code you are writing with tools to keep you on track. 
            </Typography>
          </Stack>
        </GridItem>
      </Grid>
    </Section>
  );
}

export default IntroFeaturesSection;
