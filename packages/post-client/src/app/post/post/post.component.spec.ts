import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { MaterialModule } from '../../shared-imports/material/material.module';
import { SharedImportsModule } from '../../shared-imports/shared-imports.module';
import { PostService } from '../services/post/post.service';

import { PostComponent } from './post.component';

describe('PostComponent', () => {
  let component: PostComponent;
  let fixture: ComponentFixture<PostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostComponent],
      imports: [
        RouterTestingModule,
        MaterialModule,
        BrowserDynamicTestingModule,
        SharedImportsModule,
      ],
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
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
