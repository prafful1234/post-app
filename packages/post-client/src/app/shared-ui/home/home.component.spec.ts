import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PostService } from '../../post/services/post/post.service';
import { SharedImportsModule } from '../../shared-imports/shared-imports.module';
import { of } from 'rxjs';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        RouterTestingModule,
        SharedImportsModule,
      ],
      declarations: [HomeComponent],
      providers: [
        {
          provide: PostService,
          useValue: {
            getOne: (...args) => of({}),
            getStorageItem: (...args) => {},
            setStorageItem: (...args) => {},
            removeStorageItem: (...args) => {},
          },
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
